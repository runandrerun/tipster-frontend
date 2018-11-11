import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';


const rootReducer = combineReducers({
  currencyState: currencyReducer,
})

export default rootReducer;
