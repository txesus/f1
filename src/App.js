import React from 'react';
import './App.scss';

import Map from './components/map/map';
import Content from './components/content/content';
import Header from './components/header/header';




class App extends React.Component {

  constructor(){
    super()
    this.state = {
      year: '2019',
      circuits: [],
      circuitsYears: [],
      results: [],
      clickCircuit: undefined
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
    fetch('http://ergast.com/api/f1/' + this.state.year + '.json?limit=100')
      .then((response) => {
        return response.json()
      })
      .then((yearsCircuits) => {
        this.setState({ circuitsYears: yearsCircuits.MRData.RaceTable.Races})
      })
  }

  getYearCircuits () {
    fetch('http://ergast.com/api/f1/' + this.state.year + '/circuits.json?limit=100')
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


  render (){

    const { year, circuits, circuitsYears } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Header handleYearChange={this.handleYearChange} />
          <Map year={year} circuits={circuits}/> 
          <Content year={year} circuitsYears={circuitsYears} handleYearChange={this.handleYearChange} />
        </header>      
      </div>
    );
  }
}

export default App;
