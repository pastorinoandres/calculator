import { createAction } from 'redux-actions';
import { SET_SELECTED , ADD_RECORD, INCREASE, DECREASE, ADD_COUNTER, REMOVE_COUNTER, GET_COUNTERS, COUNTERS, DEFAULT} from '../../constanst';
import { SET_COUNTERS, REMOVE_RECORD } from './../../constanst/index';
import { AsyncStorage } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';


export const setCounterSelected = createAction(SET_SELECTED, (recordkey) => recordkey );  
export const addRecord =          createAction(ADD_RECORD, (now) => now  );
export const removeRecord =       createAction(REMOVE_RECORD, (key) => key );
export const increaseCounter =    createAction(INCREASE, (recordKey,index) => ({recordKey,index}) );
export const decreaseCounter =    createAction(DECREASE, (recordKey,index) => ({recordKey,index}) );
export const defaultCounter =     createAction(DEFAULT, (recordKey,index) => ({recordKey,index}) );
export const addCounter =         createAction(ADD_COUNTER, (recordKey) => recordKey );
export const removeCounter =      createAction(REMOVE_COUNTER, (recordKey) => recordKey );

export const addAndSetCounter = () => {
  
  return (dispatch) => {

    const nowFormated = {
      day: moment().format('D'),
      month: moment().format('MMM').charAt(0).toUpperCase() + moment().format('MMM').slice(1,3),
      year: moment().format('YYYY'),
      hour: moment().format('LTS')
    }
    const dateString = `${nowFormated.day} ${nowFormated.month} ${nowFormated.year} - ${nowFormated.hour}hs`;

    dispatch(addRecord(dateString));
    dispatch(setCounterSelected(dateString));    
    
  }
}

//asyncStorage actions
export const setCountersInRedux = createAction(SET_COUNTERS, (data) => data );
export const getCountersOfStorage = createAction(GET_COUNTERS, () => {} );

export const getAndSet = () => {

  return async (dispatch) => {    
    
      try {
        dispatch(getCountersOfStorage());
        const data = await AsyncStorage.getItem(COUNTERS);
        if (data) {
          dispatch(setCountersInRedux(JSON.parse(data)))
        }
      } catch (error) {
        console.log(error);
      }    
    
  }
}



