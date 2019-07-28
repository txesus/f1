import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, Marker, CircleMarker } from 'react-leaflet';
// import Control from 'react-leaflet-control';

//Data Circuits
import data from './circuits'


const stamenTonerTiles = 'https://api.mapbox.com/styles/v1/jesusesteban/cjna67hy23vcf2rppfpvoj24q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
// const stamenTonerTiles = 'https://api.mapbox.com/styles/v1/jesusesteban/cjna67hy23vcf2rppfpvoj24q/wmts?access_token=https://api.mapbox.com/styles/v1/jesusesteban/cjna67hy23vcf2rppfpvoj24q/wmts?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';

// Ejemplos de mapas https://leaflet-extras.github.io/leaflet-providers/preview/
const mapCenter = [39.9837669, -4.2810849];
const zoomLevel = 3;

const circuits = [];

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            currentZoomLevel: zoomLevel,
            resultados: []
        };
        this.handleUpPanClick = this.handleUpPanClick.bind(this);
        this.handleRightPanClick = this.handleRightPanClick.bind(this);
        this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
        this.handleDownPanClick = this.handleDownPanClick.bind(this);
    }


    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.on('zoomend', () => {
            const updatedZoomLevel = leafletMap.getZoom();
            this.handleZoomLevelChange(updatedZoomLevel);
        });     
        fetch('https://ergast.com/api/f1/circuits.json?limit=100')
            .then(response => response.json())
            .then(resultadosJson => this.setState({resultados: resultadosJson.MRData.CircuitTable.Circuits}))

    }
        
    handleZoomLevelChange(newZoomLevel) {
        this.setState({ currentZoomLevel: newZoomLevel });
    }
    
    handleUpPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([0, -100]);
        window.console.log('Panning up');
    }
    
    handleRightPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([100, 0]);
        window.console.log('Panning right');
    }
    
    handleLeftPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([-100, 0]);
        window.console.log('Panning left');
    }
    
    handleDownPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([0, 100]);
        window.console.log('Panning down');
    }
        
    render() {
        
        const { resultados } = this.state;
        console.log(resultados[0]);

        // for (var i = 0; i < resultados.length; i++) {
        //     const Latitud = resultados[i].Location.lat;
        //     const Longitud = resultados[i].Location.long;            
        //     console.log(position = {Latitud, Longitud});     
        //     // break;           
        // }

        

        return (
            <div>
                <Map
                    ref={m => { this.leafletMap = m; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                    >
                <TileLayer
                    attribution={"Jesus Esteban"}
                    url={stamenTonerTiles}
                    />

                {data.city.map((city) => {
                    return (
                    <Marker
                        position={[city["coordinates"][1], city["coordinates"][0]]}
                    />)
                    })
                }

                {/* <Marker position={[39.9837669, -4.2810849]} /> */}
                

                {/* <Control position="topright">
                    <div>
                        <div style={{ marginLeft: '37px' }}>
                            <button onClick={this.handleUpPanClick}>
                                Pan up
                            </button>
                        </div>
                        <div>
                            <button onClick={this.handleLeftPanClick}>
                                Pan left
                            </button>
                            <button onClick={this.handleRightPanClick}>
                                Pan right
                            </button>
                        </div>
                        <div style={{ marginLeft: '30px' }}>
                            <button onClick={this.handleDownPanClick}>
                                Pan down
                            </button>
                        </div>
                    </div>
                </Control> */}
                </Map>
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('mount')
);
