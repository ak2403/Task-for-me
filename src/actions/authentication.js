import axios from 'axios';

export const registerAction = (data) => {
    return (dispatch) => {
        axios.post('/api/registration', data);
    }
}

export const loginAction = (data) => {
    return (dispatch) => {
        debugger
        axios.post('/api/login', data);
    }
}