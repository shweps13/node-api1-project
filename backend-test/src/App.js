import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import MainBlock from './components/MainBlock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          My first back-end server test
        </h2>
      </header>
      <MainBlock />
    </div>
  );
}

export default App;
