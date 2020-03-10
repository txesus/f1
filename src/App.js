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
      round: 0,
      countries: []
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
    this.getPilots();
    this.getQualifyings();   
    this.getCountries();
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
    // console.log("getPilots", this.state.year, this.state.round);
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
          const isQualifyingResults = !!resultados.MRData.RaceTable.Races[0];
          this.setState({ qualifyings: isQualifyingResults ? resultados.MRData.RaceTable.Races[0].QualifyingResults : ""})
    })
  }  


  getCountries () {
    fetch('https://restcountries.eu/rest/v2')
        .then((response) => {
          return response.json()
        })
        .then((resultados) => {
          const countries = resultados.map( (country) => {
            return (
              {
                demonym: country.demonym,
                flag: country.flag,
                name: country.name,
                altSpellings: country.altSpellings
              }
            )
          })
          console.log("COUNTRIES", countries)
          this.setState({ countries})
    })
  }    

  getCountryFlagFromDemonym = (demonym) => {
    const matchCountry = this.state.countries.find((country) => {
        if(country.demonym.toLowerCase() === "argentinean"){
          return demonym.toLowerCase() === "argentine";  
        }
        return demonym.toLowerCase() === country.demonym.toLowerCase();
    })
    return matchCountry ? matchCountry.flag : "src/images/marker.png";
  }
  
  // getCountryFlagFromName = (name) => {
  //   const matchCountry = this.state.countries.find((country) => {
  //     if(country.name.toLowerCase() === "united kingdom of great britain and northern ireland"){
  //       return name.toLowerCase() === "uk";  
  //     }
  //     const recoverySpelling = country.altSpellings.find((spelling) => {
  //       console.log("SEPELLING", spelling)
  //       return name.toLowerCase() === spelling.toLowerCase()
  //     });
  //     return name.toLowerCase() === (recoverySpelling ? recoverySpelling.toLowerCase() : "");
  //   })
  //   return matchCountry ? matchCountry.flag : name;
  // }




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

handleClickMarker(e, round){        
    const { latlng } = e;
    const { lat, lng } = latlng;
    this.setMapCenter(15, [lat, lng] );
    this.setState({
      round
    }, () => {
      this.getPilots();
      this.getQualifyings();
    })
}

handleClickCarousel({lat, long}){        
  this.setMapCenter(15, [lat, long]);
  // this.getPilots();
  // this.getQualifyings();
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
            handleClickCarousel={this.handleClickCarousel}
          /> 
          <Content 
            round={round}
            pilots={pilots} 
            qualifyings={qualifyings} 
            races={races}
            getCountryFlagFromDemonym={this.getCountryFlagFromDemonym}
            // getCountryFlagFromName={this.getCountryFlagFromName}
          />           
          {/* <Carousel 
            races={races}
            handleClickMarker={this.handleClickMarker}
            handleClickCarousel={this.handleClickCarousel}
            round={round}
            setActiveRound={this.setActiveRound}
          /> */}
        </header>      
      </div>
    );
  }
}

export default App;
