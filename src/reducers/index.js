import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    authentication: authReducer,
    projectProps: projectReducer
});
