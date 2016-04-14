import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'

export default (initialState = {}) =>
    createStore(
        reducers,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            createLogger()
        )
    )

