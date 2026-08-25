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
    }
    this.handleClickCarousel = this.handleClickCarousel.bind(this);
    this.handleClickMarker = this.handleClickMarker.bind(this);
    this.handleClickRaceResults = this.handleClickRaceResults.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.year !== prevState.year){
      this.setState({ races: [], circuits: [], circuitsYears: [], pilots: [], qualifyings: [] });
      this.getData();
    }
  }



  getData(){
    this.getListCircuits();
    this.getYearCircuits();
    this.getRaces();
    if (this.state.round > 0) {
      this.getPilots();
      this.getQualifyings();
    }
  }

  getListCircuits() {
    fetch('https://api.jolpi.ca/ergast/f1/' + this.state.year + '.json?limit=100')
      .then((response) => {
        return response.json()
      })
      .then((yearsCircuits) => {
        this.setState({ circuitsYears: yearsCircuits.MRData.RaceTable.Races})
      })
  }

  getYearCircuits () {
    fetch('https://api.jolpi.ca/ergast/f1/' + this.state.year + '/circuits.json?limit=100')
        .then((response) => {
        return response.json()
        })
        .then((resultados) => {
        this.setState({ circuits: resultados.MRData.CircuitTable.Circuits})
    })
  }

  getRaces () {
    fetch('https://api.jolpi.ca/ergast/f1/' + this.state.year + '.json?limit=100')
        .then((response) => {
        return response.json()
        })
        .then((resultados) => {
        this.setState({ races: resultados.MRData.RaceTable.Races})
    })
  }



  getPilots () {
    fetch('https://api.jolpi.ca/ergast/f1/' + this.state.year + '/' + this.state.round + '/results.json')
        .then((response) => {
        return response.json()
        })
        .then((resultados) => {
        this.setState({ pilots: resultados.MRData.RaceTable.Races[0].Results})
    })
  }


  getQualifyings () {
    fetch('https://api.jolpi.ca/ergast/f1/' + this.state.year + '/' + this.state.round + '/qualifying.json')
        .then((response) => {
        return response.json()
        })
        .then((resultados) => {
          const isQualifyingResults = !!resultados.MRData.RaceTable.Races[0];
          this.setState({ qualifyings: isQualifyingResults ? resultados.MRData.RaceTable.Races[0].QualifyingResults : ""})
    })
  }


  // ISO 3166-1 alpha-2 codes keyed by F1 driver nationality (demonym)
  NATIONALITY_TO_ISO = {
    american: 'us', argentine: 'ar', australian: 'au', austrian: 'at',
    azerbaijani: 'az', bahraini: 'bh', belgian: 'be', brazilian: 'br',
    british: 'gb', canadian: 'ca', chinese: 'cn', colombian: 'co',
    czech: 'cz', danish: 'dk', dutch: 'nl', estonian: 'ee',
    finnish: 'fi', french: 'fr', german: 'de', hungarian: 'hu',
    indian: 'in', indonesian: 'id', irish: 'ie', italian: 'it',
    japanese: 'jp', mexican: 'mx', monegasque: 'mc', moroccan: 'ma',
    'new zealander': 'nz', polish: 'pl', portuguese: 'pt', russian: 'ru',
    saudi: 'sa', spanish: 'es', swedish: 'se', swiss: 'ch',
    thai: 'th', venezuelan: 've',
  };

  // ISO codes keyed by F1 circuit country name
  COUNTRY_NAME_TO_ISO = {
    australia: 'au', austria: 'at', azerbaijan: 'az', bahrain: 'bh',
    belgium: 'be', brazil: 'br', canada: 'ca', china: 'cn',
    france: 'fr', germany: 'de', hungary: 'hu', italy: 'it',
    japan: 'jp', korea: 'kr', malaysia: 'my', mexico: 'mx',
    monaco: 'mc', netherlands: 'nl', portugal: 'pt', qatar: 'qa',
    russia: 'ru', 'saudi arabia': 'sa', singapore: 'sg', spain: 'es',
    sweden: 'se', switzerland: 'ch', uk: 'gb', uae: 'ae',
    usa: 'us', 'united states': 'us', 'united kingdom': 'gb',
    'united arab emirates': 'ae',
  };

  flagUrl = (iso) => iso
    ? `https://flagcdn.com/w20/${iso}.png`
    : 'src/images/marker.png';

  getCountryFlagFromDemonym = (demonym) => {
    const iso = this.NATIONALITY_TO_ISO[demonym?.toLowerCase()];
    return this.flagUrl(iso);
  }

  getCountryFlagFromName = (name) => {
    const iso = this.COUNTRY_NAME_TO_ISO[name?.toLowerCase()];
    return iso ? this.flagUrl(iso) : name;
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

handleClickMarker(e, round){
    const { latlng } = e;
    const { lat, lng } = latlng;
    this.setMapCenter(15, [lat, lng] );
}

handleClickRaceResults(e, round){
  this.setState({
    round
  }, () => {
    this.getPilots();
    this.getQualifyings();
  })
}



handleClickCarousel({lat, long}){
  this.setMapCenter(15, [lat, long]);
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
            circuits={circuits}
            getCountryFlagFromName={this.getCountryFlagFromName}
            handleClickCarousel={this.handleClickCarousel}
            handleClickMarker={this.handleClickMarker}
            handleClickRaceResults={this.handleClickRaceResults}
            handleResetZoom={this.handleResetZoom}
            mapCenter={ mapCenter }
            races={races}
            round={round}
            setActiveRound={this.setActiveRound}
            setMapCenter={this.setMapCenter}
            year={year}
            zoomLevel={ zoomLevel}
          />
          <Content
            // getCountryFlagFromName={this.getCountryFlagFromName}
            getCountryFlagFromDemonym={this.getCountryFlagFromDemonym}
            handleResetZoom={this.handleResetZoom}
            pilots={pilots}
            qualifyings={qualifyings}
            races={races}
            round={round}
          />
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
