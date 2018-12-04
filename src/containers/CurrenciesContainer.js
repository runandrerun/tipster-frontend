import React, { Component } from 'react';
import { loadRates } from '../actions';
import { connect } from 'react-redux';
import CurrencyCard from '../components/CurrencyCard';
import CurrencySelector from '../components/CurrencySelector';
import AmountField from '../components/AmountField';
import '../styles/nav.css';
import '../styles/layout.css'

class CurrenciesContainer extends Component {

  componentDidMount = () => {
    this.props.loadRates()
  };

  currentRates = () => {
     return Object.keys(this.props.rates).map(currencyType => {
       return <CurrencyCard currency={currencyType} key={currencyType} value={this.props.rates[`${currencyType}`]} />
     });
   };

  render() {
    return (
      <React.Fragment>
        <div className="selectors">
          <div className="info">
            <CurrencySelector currencies={this.props.rates} />
            <AmountField />
          </div>
        </div>
      </React.Fragment>
    );
  };
};

  const mapStateToProps = (state) => {
    console.log(state.currencyState.rates.USD)
    return {
      rates: state.currencyState.rates
    };
  };

export default connect(mapStateToProps, { loadRates })(CurrenciesContainer);

// { this.props.rates ? this.currentRates() : null }
