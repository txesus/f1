import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, Marker, CircleMarker, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';


// const stamenTonerTiles = 'https://api.mapbox.com/styles/v1/jesusesteban/cjna67hy23vcf2rppfpvoj24q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
const stamenTonerTiles = 'https://api.mapbox.com/styles/v1/jesusesteban/cjyn1qsf100x61cpk2cjvnvij/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzdXNlc3RlYmFuIiwiYSI6ImNqc3VlY3EydTAxdDMzeXB2a2NycXJxZTIifQ.6Jxvu3C-J7-XWRjCVdMwdw';
const mapCenter = [39.9837669, -4.2810849];
const zoomLevel = 3;

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            currentZoomLevel: zoomLevel,
            resultados: []
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

    componentWillMount() {
        fetch('https://ergast.com/api/f1/circuits.json?limit=100')
          .then((response) => {
            return response.json()
          })
          .then((resultados) => {
            this.setState({ resultados: resultados.MRData.CircuitTable.Circuits})
          })
      }   




    handleZoomLevelChange(newZoomLevel) {
        this.setState({ currentZoomLevel: newZoomLevel });
    }

    handleResetZoom(newZoomLevel) {
        this.setState({ newZoomLevel: newZoomLevel });
    }


        
    render() {

        const { resultados } = this.state;

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

                {resultados.map((resultados) => {
                    return (
                        // <CircleMarker 
                        //     center={[resultados.Location.lat, resultados.Location.long]}
                        //     fillOpacity={0.5}
                        //     stroke={false}                            
                        // />
                        <Marker position={[resultados.Location.lat, resultados.Location.long]}>
                            <Popup>
                                <ul className={"list-popup"}>
                                    <li className={"title"}><span>{resultados.circuitName}</span></li>
                                    <li>
                                        <span>{resultados.Location.locality} </span>
                                        /
                                        <span> {resultados.Location.country}</span>
                                    </li>
                                    <li>
                                        <a href={resultados.url} target="_blank">Wikipedia</a>
                                    </li>
                                </ul>
                                
                            </Popup>
                        </Marker>
                        
                    )
                    })
                }

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

render(
    <App />,
    document.getElementById('mount')
);





// Recursos
// https://towardsdatascience.com/creating-a-bubbles-map-using-react-leaflet-e75124ca1cd2
// Ejemplos de mapas https://leaflet-extras.github.io/leaflet-providers/preview/

