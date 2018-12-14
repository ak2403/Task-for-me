import * as authenticationTypes from '../Types/authenticationTypes'

let initialState = {
    is_login_completed: false,
    is_signup_completed: false,
    user_info: {},
    sign_user_id: ''
}

const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case authenticationTypes.SIGNUP_COMPLETED:
            return Object.assign({}, state, {
                is_signup_completed: true,
                sign_user_id: action.payload.id || ''
            })

        case authenticationTypes.LOGIN_DONE:
            localStorage.setItem('authToken', action.token_data)
            return Object.assign({}, state, {
                is_login_completed: true,
                user_info: action.payload
            })

        case authenticationTypes.ADDED_COMPANY:
            return Object.assign({}, state, {
                user_info: action.payload
            })
        

        default:
            return state
    }
}

export default AuthenticationReducer