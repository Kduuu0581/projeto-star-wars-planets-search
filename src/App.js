import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import './App.css';
import FetchApi from './components/service/FetchApi';

function App() {
  return (
    <PlanetProvider>
      <FetchApi />
    </PlanetProvider>
  );
}

export default App;
