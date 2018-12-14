import axios from 'axios'
import jwt from 'jsonwebtoken'

const API_URL = 'http://localhost:5000'

export const signUpUserCall = data => {
    return axios.post(`${API_URL}/api/registration`, data)
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
    return axios.post(`${API_URL}/api/add_company`, data)
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

export const loginUserCall = data => {
    return axios.post(`${API_URL}/api/login`, data)
        .then(response => {
            let token_data = response.data.token
            let user_data = jwt.decode(token_data)
            return {
                status: 200,
                data: user_data
            }
        })
        .catch(err => {
            return {
                status: 400,
                error_message: err.response.data
            }
        })
}