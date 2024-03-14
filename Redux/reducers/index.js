// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
