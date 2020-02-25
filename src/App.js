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
      pilots: [],
      qualifyings: [],
      circuits: [],
      circuitsYears: [],
      results: [],
      clickCircuit: undefined,
      zoomLevel: 2.2,
      mapCenter: [22.9837669, -10.2810849],
      round: 0
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

  getPilots () {
    fetch('https://ergast.com/api/f1/' + this.state.year + '/' + this.state.round + '/results.json')
        .then((response) => {
        return response.json()
        })
        .then((resultados) => {
        this.setState({ pilots: resultados.MRData.RaceTable.Races[0].Results})
    })
  }


  getQualifyings () {
    fetch('https://ergast.com/api/f1/' + this.state.year + '/' + this.state.round + '/qualifying.json')
        .then((response) => {
        return response.json()
        })
        .then((resultados) => {
        this.setState({ qualifyings: resultados.MRData.RaceTable.Races[0].QualifyingResults})
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
      mapCenter: [36.9837669, -10.2810849],
      round: 0
  });
}

handleClickMarker(e){        
    const { latlng } = e;
    const { lat, lng } = latlng;
    this.setMapCenter(15, [lat, lng] );
    this.getPilots();
    this.getQualifyings();
}

handleClickCarousel({lat, long}){        
  this.setMapCenter(15, [lat, long]);
  this.getPilots();
  this.getQualifyings();
}


setActiveRound = (round) => {
  this.setState({round});
}


  render (){
    const { year, round, circuits, races, pilots, qualifyings, zoomLevel, mapCenter } = this.state;    

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
            round={round}
            setActiveRound={this.setActiveRound}
          /> 
          { round !==0 &&
              <Content 
                pilots={pilots} 
                qualifyings={qualifyings} 
                races={races}
              /> 
          }
          <Carousel 
            races={races}
            handleClickMarker={this.handleClickMarker}
            handleClickCarousel={this.handleClickCarousel}
            round={round}
            setActiveRound={this.setActiveRound}
          />
        </header>      
      </div>
    );
  }
}

export default App;
