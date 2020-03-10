import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';
import wiki from '../../images/wiki.png';
import L from 'leaflet';

import Carousel from '../carousel/carousel'


// MAP STYLES

// 1950
const fiftyStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck70xfbac03ik1irtiv3q29vp/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
// 1960
const sixtyStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck73izmsr2bkh1inhs7yrxrv6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
// 1970
const seventyStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck73jms8z2c6p1inh6yu5krp1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
//1980
const eightyStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck73jp92g2cb01iqwmgk74gw9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
// 1990
const ninetyStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck73jk5410aoz1imwgf0lx62u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
// 2000
const thousandStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck6sg2kb86pin1it43e343zsz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';


//BLUE
// const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/cjna67hy23vcf2rppfpvoj24q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';


// DEFAULT

const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/cjna67hy23vcf2rppfpvoj24q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';

export default class CircuitMap extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            races: []
        };
        this.props.handleResetZoom();
        this.handleClickMarker = this.props.handleClickMarker.bind(this);
        this.handleClickCarousel = this.props.handleClickCarousel.bind(this);
    }


    componentDidMount() {
        // const leafletMap = this.leafletMap.leafletElement;
        // leafletMap.on('zoomend', () => {
        //     const updatedZoomLevel = leafletMap.getZoom();
        //     this.handleZoomLevelChange(updatedZoomLevel);
        // });     
    }

    getMapStyles = (year) =>{
        let style = "";
        switch (true){
            case year <= 1959:
                style = fiftyStyled;
            break;
            case year >= 1960 && year <= 1969:
                style = sixtyStyled;
            break;
            case year >= 1970 && year <= 1979:
                style = seventyStyled;
            break;
            case year >= 1980 && year <= 1989:
                style = eightyStyled;
            break;
            case year >= 1990 && year <= 1999:
                style = ninetyStyled;
            break;
            case year >= 2000 && year <= 2009:
                style = thousandStyled;
            break;
            case year >= 2010 && year <= 2019:
                style = mapStyled;
            break;
            case year >= 2020 && year <= 2029:
                style = mapStyled;
            break;
            default:
                style = mapStyled;
            break;
        }
        return style;
    }


    // getPolyLineArray() {
    //     const circuitsCoordinates = this.props.circuits.map(circuit => {
    //         return [circuit.Location.lat, circuit.Location.long];
    //     });
    //     return circuitsCoordinates;
    // }

        
    render() {
        const { races, zoomLevel, mapCenter, handleResetZoom, round, year, setActiveRound, handleClickMarker, handleClickCarousel} = this.props;
        return (
            <div>
                <Map
                    ref={(ref) => { this.map = ref; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                    className={round === 0 ? "" : "show-content"}
                    >
                <TileLayer
                    attribution={"Jesús Esteban"}
                    url={this.getMapStyles(parseInt(year))}
                    />

                {races.map((race) => {
                    const text = L.divIcon({html: race.round});
                    return (
                        <React.Fragment>
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
                                        <li><a href={race.Circuit.url} target={"_blank"}>Wikipedia</a></li>
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