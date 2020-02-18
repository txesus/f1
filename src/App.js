import React from 'react';
import './App.scss';

import Map from './components/map/map';
import Content from './components/content/content';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';




class App extends React.Component {

  constructor(){
    super()
    this.state = {
      year: '2019',
      races: [],
      circuits: [],
      circuitsYears: [],
      results: [],
      clickCircuit: undefined,
      zoomLevel: 2.2,
      mapCenter: [22.9837669, -10.2810849],
      active: 0
    }
    this.handleClickCarousel = this.handleClickCarousel.bind(this);
    this.handleClickMarker = this.handleClickMarker.bind(this);
  }

  componentDidMount(){
    this.getData();
  }
  
  componentDidUpdate(prevProps, prevState){
    if(this.state.year !== prevState.year){
      this.getData();
    }
  }
  
  
  getData(){
    this.getListCircuits();
    this.getYearCircuits();
    this.getRaces();
  }

  getListCircuits() {
    fetch('https://ergast.com/api/f1/' + this.state.year + '.json?limit=100')
      .then((response) => {
        return response.json()
      })
      .then((yearsCircuits) => {
        this.setState({ circuitsYears: yearsCircuits.MRData.RaceTable.Races})
      })
  }

  getYearCircuits () {
    fetch('https://ergast.com/api/f1/' + this.state.year + '/circuits.json?limit=100')
        .then((response) => {
        return response.json()
        })
        .then((resultados) => {
        this.setState({ circuits: resultados.MRData.CircuitTable.Circuits})
    })
}

  getRaces () {
    fetch('https://ergast.com/api/f1/' + this.state.year + '.json?limit=100')
        .then((response) => {
        return response.json()
        })
        .then((resultados) => {
        this.setState({ races: resultados.MRData.RaceTable.Races})
    })

  }


handleYearChange = event => {
  const year = event.target.value;
  this.setState({ year });
}

setMapCenter = (zoomLevel, mapCenter) => {
  this.setState({
    zoomLevel, 
    mapCenter
  })
}

handleResetZoom = () => {
  this.setState({ 
      zoomLevel: 2.2,
      mapCenter: [22.9837669, -10.2810849],
      active: 0
  });
}

handleClickMarker(e){        
  const { latlng } = e;
  const { lat, lng } = latlng;
  this.setMapCenter(15, [lat, lng]);
}

handleClickCarousel({lat, long}){        
  this.setMapCenter(15, [lat, long]);
}


setActive = (active) => {
  this.setState({active});
}


  render (){
    const { year, circuits, races, zoomLevel, mapCenter, active } = this.state;    

    return (
      <div className="App">
        <header className="App-header">
          <Header handleYearChange={this.handleYearChange} handleResetZoom={this.handleResetZoom} />
          <Map 
            year={year} 
            circuits={circuits} 
            races={races}
            handleResetZoom={this.handleResetZoom} 
            zoomLevel={ zoomLevel} 
            mapCenter={ mapCenter } 
            setMapCenter={this.setMapCenter}
            handleClickMarker={this.handleClickMarker}
            active={active}
            setActive={this.setActive}
          /> 
          {/* <Content year={year} circuitsYears={circuitsYears} handleYearChange={this.handleYearChange} /> */}
          <Carousel 
            races={races}
            handleClickMarker={this.handleClickMarker}
            handleClickCarousel={this.handleClickCarousel}
            active={active}
            setActive={this.setActive}
          />
        </header>      
      </div>
    );
  }
}

export default App;
