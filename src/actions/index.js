import { fetchRates, selectBase } from '../adapters/currencyAdapter';

// LOAD DATA

export const loadRates = () => {
  return (dispatch) => {
    fetchRates()
      .then(ratesData => {
        dispatch(setRates(ratesData.rates))
      })
  }
}

export const startBase = (primary) => {
  return (dispatch) => {
    selectBase(primary)
      .then(ratesData => {
        dispatch(setRates(ratesData.rates))
      })
  }
}

export const selectPrimaryCurrency = (primary) => {
  console.log('Inside Selection', primary)
  return (dispatch) => {
    dispatch(setPrimaryCurrency(primary))
  }
}

export const selectSecondaryCurrency = (secondary) => {
  return (dispatch) => {
    dispatch(setSecondaryCurrency(secondary))
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
