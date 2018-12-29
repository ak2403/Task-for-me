import axios from 'axios'
import jwt from 'jsonwebtoken'
import * as configAPI from './config'

export const signUpUserCall = data => {
    return axios.post(`${configAPI.API_URL}/api/registration`, data)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            debugger
        })
}

export const addUserCompanyCall = data => {
    return axios.post(`${configAPI.API_URL}/company/${configAPI.userID}/add-company`, data)
        .then(response => {
            let token_data = response.data.token
            let user_data = jwt.decode(token_data)
            return {
                status: 200,
                data: user_data,
                token: token_data
            }
        })
        .catch(err => {
            debugger
        })
}

export const loginUserCall = data => {
    return axios.post(`${configAPI.API_URL}/api/login`, data)
        .then(response => {
            let token_data = response.data.token
            let user_data = jwt.decode(token_data)
            return {
                status: 200,
                data: user_data,
                token: token_data
            }
        })
        .catch(err => {
            return {
                status: 400,
                error_message: err.response.data
            }
        })
}

export const addProjectCall = data => {
    return axios.post(`${configAPI.API_URL}/projects/add-project`, data)
        .then(res => {
            debugger
        })
        .catch(err => {
            debugger
        })
}