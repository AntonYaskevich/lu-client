import type from '../constants'

export default (state = {}, action) => {
    switch (action.type) {
        case type.USER_SIGN_IN:
            return state
        case type.USER_SIGN_IN_SUCCESS:
            return state
        case type.USER_SIGN_IN_FAIL:
            return state
        default:
            return state
    }
}