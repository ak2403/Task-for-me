import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const initialState = {
    isAuthenicated: null,
    authUser: '',
    errorMsg: '',
    project: "5b27870e6e9052269417b084"
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'loggedIn':
            let { payload } = action;
            let decodeToken;

            if (payload.isLogged) {
                axios.defaults.headers.common['Authorization'] = payload.auth;
                localStorage.setItem('AuthKey', payload.auth);
                decodeToken = jwt.decode(payload.auth);
            } else {
                decodeToken = '';
                localStorage.removeItem('AuthKey');
            }

            return Object.assign({}, state, {
                isAuthenicated: !isEmpty(decodeToken),
                authUser: decodeToken ? decodeToken.authName : '',
                errorMsg: !decodeToken && payload.error,
                project: decodeToken && payload.project
            });

        case 'setToken':
            let getToken = localStorage.getItem('AuthKey'),
                extractToken = getToken ? jwt.decode(getToken) : '';

            return Object.assign({}, state, {
                isAuthenicated: !isEmpty(extractToken),
                authUser: extractToken ? extractToken.authName : '',
                project: extractToken ? extractToken.project : ''
            });

        default: return state;
    }
}