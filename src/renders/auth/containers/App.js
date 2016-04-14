import React from 'react'
import LoginForm from '../components/LoginForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../actions'

@connect(
    state => state,
    dispatch => ({actions: bindActionCreators(actions.signInActions, dispatch)})
)
export default class App extends React.Component {
    render() {
        return (
            <LoginForm onSubmit={::this.signIn}/>
        )
    }

    signIn(state) {
        this.props.actions.signIn(state)
    }
} 
