import { handleAction } from 'redux-actions';
import { SET_SELECTED } from '../../constanst';

const setSelectedReducer = (state,action) => action.payload ;

export default handleAction(SET_SELECTED , setSelectedReducer, null);
