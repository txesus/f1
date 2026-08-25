import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import Control from 'react-leaflet-control';
import wiki from '../../images/wiki.png';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Carousel from '../carousel/carousel';
import CircuitsGeoJSON from '../geojson/f1-circuits.json';

// Maps Ergast API circuitId → GeoJSON feature id (bacinger/f1-circuits)
const CIRCUIT_ID_MAP = {
    albert_park:      'au-1953',
    bahrain:          'bh-2002',
    shanghai:         'cn-2004',
    baku:             'az-2016',
    catalunya:        'es-1991',
    monaco:           'mc-1929',
    villeneuve:       'ca-1978',
    ricard:           'fr-1969',
    red_bull_ring:    'at-1969',
    silverstone:      'gb-1948',
    hockenheimring:   'de-1932',
    hungaroring:      'hu-1986',
    spa:              'be-1925',
    monza:            'it-1922',
    marina_bay:       'sg-2008',
    sochi:            'ru-2014',
    suzuka:           'jp-1962',
    americas:         'us-2012',
    rodriguez:        'mx-1962',
    interlagos:       'br-1940',
    yas_marina:       'ae-2009',
    imola:            'it-1953',
    nurburgring:      'de-1927',
    portimao:         'pt-2008',
    mugello:          'it-1914',
    sepang:           'my-1999',
    istanbul:         'tr-2005',
    zandvoort:        'nl-1948',
    magny_cours:      'fr-1960',
    estoril:          'pt-1972',
    jacarepagua:      'br-1977',
    jeddah:           'sa-2021',
    miami:            'us-2022',
    losail:           'qa-2004',
    vegas:            'us-2023',
    indianapolis:     'us-1909',
    buenos_aires:     'ar-1952',
    kyalami:          'za-1961',
    watkins_glen:     'us-1956',
    madrid:           'es-2026',
};

const circuitStyle = { color: '#e10600', weight: 2, opacity: 0.85 };

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconUrl: markerIcon, shadowUrl: markerShadow });

// MAP STYLES — one per decade
const token = process.env.REACT_APP_MAPBOX_TOKEN;
const tileUrl = (styleId) => `https://api.mapbox.com/styles/v1/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`;

const fiftyStyled    = tileUrl('jesusesteban/ck70xfbac03ik1irtiv3q29vp');
const sixtyStyled    = tileUrl('jesusesteban/ck7mi2u9500ae1ika9hvykbwn');
const seventyStyled  = tileUrl('jesusesteban/ck73jms8z2c6p1inh6yu5krp1');
const eightyStyled   = tileUrl('jesusesteban/ck73jp92g2cb01iqwmgk74gw9');
const ninetyStyled   = tileUrl('jesusesteban/ck73jk5410aoz1imwgf0lx62u');
const thousandStyled = tileUrl('jesusesteban/ckeo3upc43v3b19n0hfezjhi1');
const modernStyled   = tileUrl('mapbox/dark-v11');

export default class CircuitMap extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            races: []
        };
        this.props.handleResetZoom();
        this.handleClickMarker = this.props.handleClickMarker.bind(this);
        this.handleClickRaceResults = this.props.handleClickRaceResults.bind(this);
        this.handleClickCarousel = this.props.handleClickCarousel.bind(this);
    }


    componentDidMount() {
    }

    getCircuitFeatures(races) {
        const geoIds = new Set(races.map(r => CIRCUIT_ID_MAP[r.Circuit.circuitId]).filter(Boolean));
        return CircuitsGeoJSON.features.filter(f => geoIds.has(f.properties.id));
    }

    getMapStyles = (year) => {
        if (year <= 1959) return fiftyStyled;
        if (year <= 1969) return sixtyStyled;
        if (year <= 1979) return seventyStyled;
        if (year <= 1989) return eightyStyled;
        if (year <= 1999) return ninetyStyled;
        if (year <= 2009) return thousandStyled;
        return modernStyled;
    }


    // getPolyLineArray() {
    //     const circuitsCoordinates = this.props.circuits.map(circuit => {
    //         return [circuit.Location.lat, circuit.Location.long];
    //     });
    //     return circuitsCoordinates;
    // }

        
    render() {
        const { races, zoomLevel, mapCenter, handleResetZoom, round, year, setActiveRound, handleClickMarker, handleClickCarousel, getCountryFlagFromName} = this.props;
        const circuitFeatures = this.getCircuitFeatures(races);
        return (
            <div>
                <Map
                    ref={(ref) => { this.map = ref; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                    className={round === 0 ? "" : "show-content"}
                    >
                <TileLayer
                    // attribution={"Jesús Esteban"}
                    url={this.getMapStyles(parseInt(year))}
                    />
                {circuitFeatures.map(feature => (
                    <GeoJSON
                        key={feature.properties.id}
                        data={feature}
                        style={circuitStyle}
                    />
                ))}
                {races.map((race) => {
                    const text = L.divIcon({html: race.round, className: '', iconSize: [25, 35], iconAnchor: [12, 35]});
                    return (
                        <React.Fragment key={race.round}>
                            <Marker 
                                icon={text}
                                position={[race.Circuit.Location.lat, race.Circuit.Location.long]}
                                onClick={ e=>                                     
                                    this.handleClickMarker(e, race.round)
                                }   
                            >
                                <Popup>
                                    <ul className={"list-popup"}>
                                        <li className={"title"}><span>{race.raceName}</span></li>
                                        <li>
                                            <span>{race.Circuit.Location.locality} </span>
                                            /
                                            <span> {race.Circuit.Location.country}</span>
                                        </li>
                                        <li className={'show-results'}>
                                            <span onClick={ e=> this.handleClickRaceResults(e, race.round)} role={"img"} aria-label={"checkered flag"}>
                                                🏁 Click to Race results 🏁
                                            </span>
                                        </li>
                                        <li><a href={race.Circuit.url} target={"_blank"} rel="noopener noreferrer">Wikipedia</a></li>
                                    </ul>
                                    
                                </Popup>
                            </Marker>     
                        </React.Fragment>                        
                    )
                    })
                }                

                {/* <Polyline color="#F1C40F"  weight="1" positions={this.getPolyLineArray()}/> */}

                {/* <Control position="topleft">
                    <div>
                        <div style={{ marginLeft: '0px', marginTop: '20px', zIndex: '0' }}>
                            <input className={'switch'} type="checkbox" id="switch" /><label for="switch">Toggle</label>
                        </div>
                    </div>
                </Control> */}


                <Control position="topright">
                    <div>
                        <div style={{ marginLeft: '37px', marginTop: '110px', zIndex: '0' }}>
                            <button onClick={() => handleResetZoom()}>
                                Reset
                            </button>                            
                        </div>
                    </div>
                </Control>
                <Carousel 
                    races={races}
                    handleClickMarker={handleClickMarker}
                    handleClickCarousel={handleClickCarousel}
                    round={round}
                    setActiveRound={setActiveRound}
                    getCountryFlagFromName={getCountryFlagFromName}
                />
                </Map>
                
                <img src={wiki} alt="wiki" className="img-wiki"/>
                
            </div>
        );
    }
}







// Recursos
// https://towardsdatascience.com/creating-a-bubbles-map-using-react-leaflet-e75124ca1cd2
// Ejemplos de mapas https://leaflet-extras.github.io/leaflet-providers/preview/
// https://github.com/humangeo/leaflet-dvf/wiki/2.-Examples
// http://www.liedman.net/leaflet-routing-machine/
// http://rowanwins.github.io/leaflet-easyPrint/
// https://github.com/dwilhelm89/Leaflet.StyleEditor
// COLORES POR DECADA https://juiceboxinteractive.com/blog/color/

// 1960
// 207 73 23
// 249 176 61
// 117 140 51
// 152 89 20
// 208 178 133
// 45 117 140


// https://jsbin.com/jisuweyaju/edit?html,output
// https://blog.mapbox.com/map-madness-round-3-f5536000fdbb
// https://wrld3d.com/wrld.js/latest/docs/examples/embedding-a-3d-map/
// https://medium.com/@alexandervarlamov/using-mapbox-gl-js-custom-maps-with-tableau-and-powerbi-41c002d4617e