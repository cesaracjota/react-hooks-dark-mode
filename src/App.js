import React from 'react';
import './App.css';
import Characters from './components/Menu/Characters';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;
