import React from 'react';
import './App.scss';

import Map from './components/map/map';
import Menu from './components/menu/menu';
// import ContentData from './components/content-data/content-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Map />   
        {/* <ContentData /> */}
      </header>      
    </div>
  );
}

export default App;
