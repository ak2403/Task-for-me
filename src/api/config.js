import jwt from 'jsonwebtoken'

export const API_URL = 'http://localhost:5000'

let authToken = localStorage.getItem('authToken')
let decode_token = jwt.decode(authToken)

export const Basic_header={
    headers:{
        "Content-Type": "application/json"
    }
}

export let userID = decode_token ? decode_token.id : '';

export let Authorization_header = {
    headers: {
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json"
    }
}

export const renderToken = token => {
    let decode_token = jwt.decode(token)
    userID = decode_token.id
    Authorization_header.headers.Authorization = `Bearer ${token}`
}