import React, { Component } from 'react';
import { loadRates } from './actions';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    console.log(state)
    return {
      rates: state.currencyState.rates,
    }
  }

export default connect(mapStateToProps, { loadRates })(App);
