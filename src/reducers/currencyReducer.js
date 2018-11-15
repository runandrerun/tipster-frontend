const initialState = {
  rates: {},
  primaryCurrency: {},
  secondaryCurrency: {},
}

const currencyReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_RATES':
    return {
      ...state,
      rates: action.payload.rates
    }

    case 'SELECT_PRIMARY':
    return {
      ...state,
      primaryCurrency: action.payload.primary
    }

    case 'SELECT_SECONDARY':
    return {
      ...state,
      secondaryCurrency: action.payload.secondary
    }

    default:
    return state
  }
}

export default currencyReducer;
