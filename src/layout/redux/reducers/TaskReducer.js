import { GETALLISSUES, GETDETAILEDISSUE } from '../types/tasks';

let initalState = {
    totalIssues: [],
    detailed_issue: {}
}

export default function TaskReducer(state=initalState, action){
    switch(action.type){
        case GETALLISSUES:
            return {
                ...state,
                totalIssues: action.payload
            }
        case GETDETAILEDISSUE:
            return {
                ...state,
                detailed_issue: action.payload
            }
        default:
            return state;
    }
}