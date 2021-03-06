import React, { Component } from 'react';
import CurrenciesContainer from './containers/CurrenciesContainer';
import NavBar from './navigation/NavBar';
import './App.css';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CurrenciesContainer />
      </div>
    );
  }
};
