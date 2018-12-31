import jwt from 'jsonwebtoken'
import * as userTypes from '../types/user-types'

let initialState = {
    is_user_logged: false,
    user: {}
}

export default function User(state = initialState, action) {
    switch (action.type) {
        case userTypes.USER_LOGGED:
            let decode_token = jwt.decode(action.payload.token)
            localStorage.setItem('authToken', action.payload.token)

            return Object.assign({}, state, {
                is_user_logged: true,
                user: decode_token
            })

        case userTypes.UPDATE_TOKEN:
            let getToken = localStorage.getItem('authToken')
            if (getToken) {
                let decode_token = jwt.decode(getToken)
                return Object.assign({}, state, {
                    is_user_logged: true,
                    user: decode_token
                })
            } else {
                return Object.assign({}, state, {
                    is_user_logged: false,
                    user: {}
                })
            }

        case userTypes.USER_LOGOUT:
            return Object.assign({}, state, {
                user: {},
                is_user_logged: false
            })

        default:
            return state
    }
}