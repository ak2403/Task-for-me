import axios from 'axios';

export const registerAction = (data) => {
    return (dispatch) => {
        axios.post('/api/registration', data);
    }
}

export const loginAction = (data) => {
    return (dispatch) => {
        axios.post('/api/login', data)
            .then(res => {
                dispatch({
                    type: 'loggedIn',
                    payload: res.data
                });
            });
    }
}

export const setToken = () => {
    return {
        type: 'setToken'
    }
}