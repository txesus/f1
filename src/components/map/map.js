import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import Control from 'react-leaflet-control';

// Map Styles
// const stamenTonerTiles = 'https://api.mapbox.com/styles/v1/jesusesteban/cjna67hy23vcf2rppfpvoj24q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
const stamenTonerTiles = 'https://api.mapbox.com/styles/v1/jesusesteban/cjyn1qsf100x61cpk2cjvnvij/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
// const stamenTonerTiles = 'https://api.mapbox.com/styles/v1/jesusesteban/cjynakrxe1jzk1cqco7zdva6j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';

const mapCenter = [26.9837669, -60.2810849];
const zoomLevel = 2.5;

const polyline = [[41.57, 2.26111], [-37.8497, 144.968]];

const multiPolyline = [
    [[41.57, 2.26111], [-37.8497, 144.968]],
    [[-37.8497, 144.968], [26.0325, 50.5106]],
];


export default class CircuitMap extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            currentZoomLevel: zoomLevel,
            circuits: []
        };
        this.handleResetZoom = this.handleResetZoom.bind(this);
    }


    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.on('zoomend', () => {
            const updatedZoomLevel = leafletMap.getZoom();
            this.handleZoomLevelChange(updatedZoomLevel);
        });     
    }


    handleZoomLevelChange(newZoomLevel) {
        this.setState({ currentZoomLevel: newZoomLevel });
    }

    handleResetZoom(newZoomLevel) {
        this.setState({ newZoomLevel: newZoomLevel });
    }


    getPolyLineArray() {
        const circuitsCoordinates = this.props.circuits.map(circuit => {
            return [circuit.Location.lat, circuit.Location.long];
        });

        return circuitsCoordinates;
    }

        
    render() {

        const { circuits} = this.props;
        console.log(multiPolyline);


        return (
            <div>
                <Map
                    ref={m => { this.leafletMap = m; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                    >
                <TileLayer
                    attribution={"Jesús Esteban"}
                    url={stamenTonerTiles}
                    />

                {circuits.map((circuit) => {
                    return (
                        <React.Fragment>
                            <Marker 
                                position={[circuit.Location.lat, circuit.Location.long]}
                            >
                                <Popup>
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
                                    
                                </Popup>
                            </Marker>     
                        </React.Fragment>                        
                    )
                    })
                }                

                <Polyline color="#F1C40F"  weight="1" positions={this.getPolyLineArray()}/>




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