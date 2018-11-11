import React, { Component } from 'react';
import CurrenciesContainer from './containers/CurrenciesContainer';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrenciesContainer />
      </div>
    );
  }
}

export default App;
