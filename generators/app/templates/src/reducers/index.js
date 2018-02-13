import {combineReducers} from 'redux';
import counter from 'ducks/counter';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
