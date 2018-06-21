import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const initialState = {
    isAuthenicated: null,
    authUser: '',
    errorMsg: ''
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'loggedIn':
            let { payload } = action;
            let decodeToken;
            
            if (payload.isLogged) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${payload.auth}`;
                decodeToken = jwt.decode(payload.auth);
            } else {
                decodeToken = '';
            }

            return Object.assign({}, state, {
                isAuthenicated: !isEmpty(decodeToken),
                authUser: decodeToken ? decodeToken.authName : '',
                errorMsg: !decodeToken && payload.error
            });
        default: return state;
    }
}