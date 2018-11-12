const initialState = {
  rates: {},
  selectedRate: {},
}

const currencyReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_RATES':
    return {
      ...state,
      rates: action.payload.rates
    }

    case 'SELECT_RATE':
    return {
      ...state,
      selectedRate: action.payload.rate
    }

    default:
    return state
  }
}

export default currencyReducer;
