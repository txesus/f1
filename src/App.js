import React from 'react';
import './App.scss';

import Map from './components/map/map';
import Menu from './components/menu/menu';
import Navigation from './components/navigation/navigation';
// import ContentData from './components/content-data/content-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Map /> 
        <Navigation />  
        {/* <ContentData /> */}
      </header>      
    </div>
  );
}

export default App;
