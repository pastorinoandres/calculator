import { handleActions } from 'redux-actions';
import { 
  ADD_RECORD, 
  INCREASE, 
  DECREASE, 
  ADD_COUNTER, 
  REMOVE_COUNTER, 
  SET_COUNTERS, 
  GET_COUNTERS,
  REMOVE_RECORD,
  DEFAULT  } 
from '../../constanst';


const addRecordReducer = (state,action) => (
  {...state, [action.payload]:[0]}
)
const removeRecordReducer = (state,action) => {
  const copyState = Object.assign({},state);
  delete copyState[action.payload];
  return copyState;
}
const addCounterReducer = (state,action) => {
  return {...state, 
    [action.payload]:[...state[action.payload],0]
  }
}
const removeCounterReducer = (state,action) => {
  let counterStack = [...state[action.payload]]
  counterStack.pop();
  return {...state, [action.payload]: counterStack}
}
const increaseCounterReducer = (state,action) => {
  const { recordKey, index } = action.payload;
  let counterStack = [...state[recordKey]];
  counterStack[index] = counterStack[index]+1
  return {...state, [recordKey]:counterStack}
}
const decreaseCounterReducer = (state,action) => {
  const { recordKey, index } = action.payload;
  let counterStack = [...state[recordKey]];
  counterStack[index] = counterStack[index]-1
  return {...state, [recordKey]:counterStack}
}
const defaultCounterReducer = (state,action) => {
  const { recordKey, index } = action.payload;
  let counterStack = [...state[recordKey]];
  counterStack[index] = 0 ;
  return {...state, [recordKey]:counterStack}
}
const setCountersReducer = (state, action) => action.payload;


export default handleActions(
  {
    [ADD_RECORD]: addRecordReducer,
    [REMOVE_RECORD]: removeRecordReducer,
    [ADD_COUNTER]: addCounterReducer,
    [REMOVE_COUNTER]: removeCounterReducer,
    [INCREASE]: increaseCounterReducer,
    [DECREASE]: decreaseCounterReducer,
    [DEFAULT]: defaultCounterReducer,
    [SET_COUNTERS]: setCountersReducer,
    [GET_COUNTERS]: (state) => state
  },
  {});