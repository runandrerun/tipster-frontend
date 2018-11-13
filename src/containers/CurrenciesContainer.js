import React, { Component } from 'react';
import { loadRates } from '../actions';
import { connect } from 'react-redux';
import CurrencyCard from '../components/CurrencyCard';


class CurrenciesContainer extends Component {

  componentDidMount = () => {
    this.props.loadRates()
  }

  currentRates = () => {
     return Object.keys(this.props.rates).map(currencyType => {
       return <CurrencyCard currency={currencyType} key={currencyType} value={this.props.rates[`${currencyType}`]} />
     })
   }

  render() {
    return (
      <div className="Currency-Container">
        { this.props.rates ? this.currentRates() : null }
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    console.log(state.currencyState.rates.USD)
    return {
      rates: state.currencyState.rates,
    }
  }

export default connect(mapStateToProps, { loadRates })(CurrenciesContainer);
