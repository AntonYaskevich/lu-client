import type from '../constants'
import utils from '../../utils'

const ipcRenderer = window.require('electron').ipcRenderer;

let signInActions = {
    signIn: data => {
        return dispatch => {
            return fetch('http://localhost:8080/api/v1/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Username: data.username,
                    Password: data.password
                })
            })
                .then(utils.checkStatus)
                .then(response => response.json())
                .then(json => dispatch(signInActions.success(json)))
                .catch(error => dispatch(signInActions.fail()))
        }
    },
    success: data => {
        localStorage.setItem('jwt', data.Authorization)
        ipcRenderer.send('success-login')
        return {
            type: type.USER_SIGN_IN_SUCCESS
        }
    },
    fail: () => {
        return {
            type: type.USER_SIGN_IN_FAIL
        }

    }
}

export default {
    signInActions
}