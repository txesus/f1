import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import Control from 'react-leaflet-control';
import wiki from '../../images/wiki.png';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Carousel from '../carousel/carousel';
import Wadus from '../geojson/barcelona.json';

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
        // const leafletMap = this.leafletMap.leafletElement;
        // leafletMap.on('zoomend', () => {
        //     const updatedZoomLevel = leafletMap.getZoom();
        //     this.handleZoomLevelChange(updatedZoomLevel);
        // });     
        console.log("HOLA", Wadus)
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
        const showBarcelona = races.some(r => r.Circuit.circuitId === 'catalunya');
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
                {showBarcelona && <GeoJSON data={Wadus.features} />}
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