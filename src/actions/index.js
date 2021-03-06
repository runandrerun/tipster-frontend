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
  console.log('startBase', primary)
  return (dispatch) => {
    return selectBase(primary)
      .then(ratesData => {
        console.log('Second step', ratesData)
        dispatch(chosenCurrency(ratesData.rates))
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

const chosenCurrency = (rates) => {
    return {
      type: 'CHOSEN_RATES',
      payload: {
        rates
      }
    }
}
