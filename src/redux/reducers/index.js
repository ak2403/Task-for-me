import { combineReducers } from 'redux'
import AuthenticationReducer from './authenticationReducer'
import ProjectReducer from './projectReducer'

const Reducers = combineReducers({
    Authentication: AuthenticationReducer,
    project: ProjectReducer
})

export default Reducers