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
      circuits: [],
      circuitsYears: [],
      results: [],
      clickCircuit: undefined,
      zoomLevel: 2.2,
      mapCenter: [22.9837669, -10.2810849]
    }
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
      mapCenter: [22.9837669, -10.2810849]
  });
}

  render (){
    const { year, circuits, zoomLevel, mapCenter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Header handleYearChange={this.handleYearChange} handleResetZoom={this.handleResetZoom} />
          <Map year={year} circuits={circuits} handleResetZoom={this.handleResetZoom} zoomLevel={ zoomLevel} mapCenter={ mapCenter } setMapCenter={this.setMapCenter}/> 
          {/* <Content year={year} circuitsYears={circuitsYears} handleYearChange={this.handleYearChange} /> */}
          <Carousel year={year} circuits={circuits}></Carousel>
        </header>      
      </div>
    );
  }
}

export default App;
