import { fetchRates } from '../adapters/currencyAdapter';

// LOAD DATA

export const loadRates = () => {
  return (dispatch) => {
    fetchRates()
      .then(ratesData => {
        console.log('Inside Load Rates', ratesData)
        console.log('Second Load Rates', ratesData.rates)
        dispatch(setRates(ratesData.rates))
      })
  }
}

// SET DATA

const setRates = (rates) => {
  return {
    type: 'LOAD_RATES',
    payload: {
      rates
    }
  }
}
