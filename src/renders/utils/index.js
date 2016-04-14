let utils = {
    createActionTypes: types => {
        return types.reduce((actions, type) => {
            actions[type] = type
            return actions
        }, {})
    },
    checkStatus: response => {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}

export default utils