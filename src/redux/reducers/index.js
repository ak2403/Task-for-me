import { combineReducers } from 'redux'
import AuthenticationReducer from './authenticationReducer'
import ProjectReducer from './projectReducer'
import IssueReducer from './issue-reducer';

const Reducers = combineReducers({
    authentication: AuthenticationReducer,
    project: ProjectReducer,
    issue: IssueReducer
})

export default Reducers