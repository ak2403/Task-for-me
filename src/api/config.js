import jwt from 'jsonwebtoken'

const getToken = localStorage.getItem('authToken')
const decodeToken = jwt.decode(getToken)

export const API_URL = 'http://localhost:5000'
export let userID = decodeToken ? decodeToken.id : ''

export const AuthorizatedHeader = {
    headers: {
        Authorization: `Bearer ${getToken}`
    }
}

export const retrieveToken = (token) => {
    if (token) {
        localStorage.setItem('authToken', token)
    }
    let decodeToken = jwt.decode(token || getToken)
    userID = decodeToken ? decodeToken.id : ''
    return {
        data: decodeToken
    }
}