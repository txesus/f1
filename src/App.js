import React from 'react';
import './App.scss';

import Map from './components/map/map';
import Content from './components/content/content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map /> 
        <Content />
      </header>      
    </div>
  );
}

export default App;
