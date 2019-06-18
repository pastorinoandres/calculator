import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloaderState = {};
const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware,thunk)); 

const store = createStore(reducer,preloaderState,enhancer);

export default store;

