import React, { Component } from 'react';
import { loadRates } from '../actions';
import { connect } from 'react-redux';
import CurrencyCard from '../components/CurrencyCard';


class CurrenciesContainer extends Component {

  componentDidMount = () => {
    this.props.loadRates()
  }

  currentRates = () => {
    console.log(this.props.rates)
     // return this.props.rates.map(currency => {
     //   console.log("currentRates", currency)
     //   return <CurrencyCard currency={currency} key={currency} />
     // })
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
    console.log(state)
    return {
      rates: state.currencyState.rates,
    }
  }

export default connect(mapStateToProps, { loadRates })(CurrenciesContainer);
