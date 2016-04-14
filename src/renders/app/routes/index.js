import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../containers/App'
import LoginForm from '../components/LoginForm'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LoginForm}/>
    </Route>
)