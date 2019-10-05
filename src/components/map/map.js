import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import Control from 'react-leaflet-control';

// Map Styles
// const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck17xq26f05nr1cqgeafvjwxs/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/ck17yr99g3bx21coh6z6t0mz0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
//const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/cjyn1qsf100x61cpk2cjvnvij/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
//const mapStyled = 'https://api.mapbox.com/styles/v1/jesusesteban/cjynakrxe1jzk1cqco7zdva6j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';



export default class CircuitMap extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            zoomLevel: 2.2,
            mapCenter: [22.9837669, -10.2810849],
            circuits: []
        };
        this.handleClickMarker = this.handleClickMarker.bind(this)
        this.handleResetZoom = this.handleResetZoom.bind(this);
    }


    componentDidMount() {
        // const leafletMap = this.leafletMap.leafletElement;
        // leafletMap.on('zoomend', () => {
        //     const updatedZoomLevel = leafletMap.getZoom();
        //     this.handleZoomLevelChange(updatedZoomLevel);
        // });     
    }


    handleResetZoom(e) {
        this.setState({ 
            zoomLevel: 2.2,
            mapCenter: [22.9837669, -10.2810849]
        });
    }
    handleClickMarker(e){        
        const { latlng } = e;
        const { lat, lng } = latlng;
        this.setState({ 
            zoomLevel: 15,
            mapCenter: [lat,lng]
         });
         console.log(e);
    }


    getPolyLineArray() {
        const circuitsCoordinates = this.props.circuits.map(circuit => {
            return [circuit.Location.lat, circuit.Location.long];
        });
        return circuitsCoordinates;
    }

        
    render() {

        const { circuits } = this.props;
        const { zoomLevel, mapCenter } = this.state;
        

        return (
            <div>
                <Map
                    ref={(ref) => { this.map = ref; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                    >
                <TileLayer
                    attribution={"Jesús Esteban"}
                    url={mapStyled}
                    />

                {circuits.map((circuit) => {
                    return (
                        <React.Fragment>
                            <Marker 
                                position={[circuit.Location.lat, circuit.Location.long]}
                                onClick={ e=> this.handleClickMarker(e)}   
                            >
                                {/* <Popup>
                                    <ul className={"list-popup"}>
                                        <li className={"title"}><span>{circuit.circuitName}</span></li>
                                        <li>
                                            <span>{circuit.Location.locality} </span>
                                            /
                                            <span> {circuit.Location.country}</span>
                                        </li>
                                        <li>
                                            <a href={circuit.url} target="_blank">Wikipedia</a>
                                        </li>
                                    </ul>
                                    
                                </Popup> */}
                            </Marker>     
                        </React.Fragment>                        
                    )
                    })
                }                

                {/* <Polyline color="#F1C40F"  weight="1" positions={this.getPolyLineArray()}/> */}




                <Control position="topright">
                    <div>
                        <div style={{ marginLeft: '37px' }}>
                            <button onClick={this.handleResetZoom}>
                                Reset Zoom
                            </button>
                        </div>
                    </div>
                </Control>
                </Map>
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