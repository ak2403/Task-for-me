import * as authenticationTypes from '../Types/authenticationTypes'
import * as postAPI from '../../api/postAPI'

export const signUpUser = data => {
    return async dispatch => {
        let getResponse = await postAPI.signUpUserCall(data)
        if(getResponse.status === 200){
            dispatch({
                type: authenticationTypes.SIGNUP_COMPLETED,
                payload: getResponse.data
            })
        }else{

        }
    }
}

export const addUserCompany = data => {
    return async dispatch => {
        let getResponse = await postAPI.addUserCompanyCall(data)
        if(getResponse.status === 200){
            dispatch({
                type: authenticationTypes.ADDED_COMPANY,
                payload: getResponse.data
            })
        }else{

        }
    }
}

export const loginUser = data => {
    return async dispatch => {
        let getResponse = await postAPI.loginUserCall(data)
        if(getResponse.status === 200){
            dispatch({
                type: authenticationTypes.LOGIN_DONE,
                payload: getResponse.data,
                token_data: getResponse.token
            })
        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
        let getResponse = await postAPI.logoutUserCall()
        if(getResponse.status === 200){
            dispatch({
                type: authenticationTypes.LOGOUT
            })
        }
    }   
}