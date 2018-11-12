import { fetchRates } from '../adapters/currencyAdapter';

// LOAD DATA

export const loadRates = () => {
  console.log("Inside load Rates 1")
  return (dispatch) => {
    console.log("Inside Dispatch")
    fetchRates()
      .then(ratesData => {
        dispatch(setRates(ratesData.rates))
      })
  }
}

// SET DATA

const setRates = (rates) => {
  console.log("Set Rates", rates)
  return {
    type: 'LOAD_RATES',
    payload: {
      rates
    }
  }
}
