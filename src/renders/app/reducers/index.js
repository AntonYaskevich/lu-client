import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import signIn from './signIn'

export default combineReducers({
    routing,
    signIn
})