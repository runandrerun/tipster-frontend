import { fetchRates } from '../adapters/currencyAdapter';

// LOAD DATA

export const loadRates = () => {
  console.log("Inside load Rates 1")
  return (dispatch) => {
    return fetchRates()
      .then(ratesData => {
        console.log('Inside Load Rates', ratesData)
        console.log('Second Load Rates', ratesData)
        dispatch(setRates(ratesData))
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
