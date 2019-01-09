import { combineReducers } from 'redux'
import AuthenticationReducer from './authenticationReducer'
import ProjectReducer from './projectReducer'
import IssueReducer from './issue-reducer'
import ManageReducer from './manage-reducer'

const Reducers = combineReducers({
    authentication: AuthenticationReducer,
    project: ProjectReducer,
    issue: IssueReducer,
    manage: ManageReducer
})

export default Reducers