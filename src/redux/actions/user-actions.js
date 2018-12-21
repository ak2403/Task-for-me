import * as postAPI from '../../api/postAPI'
import * as userTypes from '../types/user-types'
import { Authorization_header, renderToken } from '../../api/config'

export const loginCall = data => {
    return async dispatch => {
        let loginResponse = await postAPI.loginCall(data)
        if(loginResponse.status === 200){
            Authorization_header.headers.Authorization = `Bearer ${loginResponse.data.token}`
            renderToken(loginResponse.data.token)
            dispatch({
                type: userTypes.USER_LOGGED,
                payload: loginResponse.data
            })
        }else{

        }
    }
}

export const updateToken = () => {
    return {
        type: userTypes.UPDATE_TOKEN
    }
}

export const AddCompanyCall = data => {
    return async dispatch => {
        let companyResponse = await postAPI.AddCompanyCall(data)
    }
}

export const logout = () => {
    localStorage.removeItem('authToken')
    return {
        type: userTypes.USER_LOGOUT
    }
}