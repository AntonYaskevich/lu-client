import React from 'react'

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    componentWillMount(){
        if(localStorage.getItem('jwt')){
            this.props.actions.success()
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={::this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={::this.handleUsernameChange}/>
                    <input
                        type="text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={::this.handlePasswordChange}/>
                    <input type="submit" text="SignIn"/>
                </form>
            </div>
        )
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }
}