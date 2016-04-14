import type from '../constants'

let reducers = {
    [type.USER_SIGN_IN]: (state, payload) => {
        return state
    },
    [type.USER_SIGN_IN_SUCCESS]: (state, payload) => {
        return state
    },
    [type.USER_SIGN_IN_FAIL]: (state, payload) => {
        return state
    }
}

export default (state = {}, action) => {
    return reducers[action.type]
        ? reducers[action.type](state, action.payload)
        : state
}