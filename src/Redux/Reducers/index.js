import { combineReducers } from 'redux'
import AuthenticationReducer from './authenticationReducer'

const Reducers = combineReducers({
    Authentication: AuthenticationReducer
})

export default Reducers