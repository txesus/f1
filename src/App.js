import React from 'react';
import './App.scss';

import Map from './components/map/map';
import ContentData from './components/content-data/content-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map />   
        {/* <ContentData /> */}
      </header>      
    </div>
  );
}

export default App;
