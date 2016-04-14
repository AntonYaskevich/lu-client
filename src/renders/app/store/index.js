import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import reducers from '../reducers'

const router = routerMiddleware(hashHistory)

const enhancer = applyMiddleware(
    thunk,
    router,
    createLogger()
)

export default (initialState = {}) => createStore(reducers, initialState, enhancer)

