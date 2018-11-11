import { fetchRates } from '../adapters/currencyAdapter';

export const loadUsers = () => {
  return (dispatch) => {
    fetchRates()
      .then(rates => {
        dispatch(setRates(rates))
      })
  }
}
