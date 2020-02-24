import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';
import wiki from '../../images/wiki.png';
// Map Styles
// const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck6gzx8x604xk1ipgqkwomp1g/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
// const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck17yr99g3bx21coh6z6t0mz0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
//const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/cjyn1qsf100x61cpk2cjvnvij/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
// const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/cjynakrxe1jzk1cqco7zdva6j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';

//BLUE
// const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/cjna67hy23vcf2rppfpvoj24q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';


// BLACK
//const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck6sg0gp31a0f1imgchb0znld/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck6sg2kb86pin1it43e343zsz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';


export default class CircuitMap extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            races: []
        };
        this.props.handleResetZoom();
        this.handleClickMarker = this.props.handleClickMarker.bind(this);
    }


    componentDidMount() {
        // const leafletMap = this.leafletMap.leafletElement;
        // leafletMap.on('zoomend', () => {
        //     const updatedZoomLevel = leafletMap.getZoom();
        //     this.handleZoomLevelChange(updatedZoomLevel);
        // });     
    }



    // handleClickMarker(e){        
    //     const { latlng } = e;
    //     const { lat, lng } = latlng;
    //     this.props.setMapCenter(15, [lat, lng]);
    // }


    // getPolyLineArray() {
    //     const circuitsCoordinates = this.props.circuits.map(circuit => {
    //         return [circuit.Location.lat, circuit.Location.long];
    //     });
    //     return circuitsCoordinates;
    // }

        
    render() {
        const { races, zoomLevel, mapCenter, handleResetZoom, setActiveRound, round } = this.props;
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
                    url={mapStyled}
                    />

                {races.map((race) => {
                    return (
                        <React.Fragment>
                            <Marker 
                                position={[race.Circuit.Location.lat, race.Circuit.Location.long]}
                                onClick={ e=> 
                                    {
                                        this.handleClickMarker(e);
                                        setActiveRound(race.round)
                                    }
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




                <Control position="topright">
                    <div>
                        <div style={{ marginLeft: '37px', marginTop: '110px', zIndex: '0' }}>
                            <button onClick={() => handleResetZoom()}>
                                Reset
                            </button>
                        </div>
                    </div>
                </Control>
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