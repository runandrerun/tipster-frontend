import { fetchRates } from '../adapters/currencyAdapter';

// LOAD DATA

export const loadRates = () => {
  return (dispatch) => {
    fetchRates()
      .then(rates => {
        dispatch(setRates(rates))
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
