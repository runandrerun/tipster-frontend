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

export const selectPrimaryCurrency = () => {
  return (dispatch) => {

  }
}

export const selectSecondaryCurrency = () => {
  return (dispatch) => {

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

const setPrimaryCurrency = (primary) => {
  return {
    type: 'SELECT_PRIMARY',
    payload: {
      primary
    }
  }
}

const setSecondaryCurrency = (secondary) => {
  return {
    type: 'SELECT_SECONDARY',
    payload: {
      secondary
    }
  }
}
