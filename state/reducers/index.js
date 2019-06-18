import { combineReducers} from 'redux';
import counters from './counters';
import counterSelected from './counterSelected';

export default combineReducers({
  counters, counterSelected
});