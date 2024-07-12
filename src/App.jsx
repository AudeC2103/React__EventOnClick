import React from 'react';
import './App.css';
import Activite from './components/Activite/Activite';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Compteurs d'Activités</h1>
        <div className="counter-container">
          <Activite title="Compteur Match" />
          <Activite title="Compteur Festival" />
          <Activite title="Compteur Vote" />
        </div>
      </header>
    </div>
  );
}

export default App;
