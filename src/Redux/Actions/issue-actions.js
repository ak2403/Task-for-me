import * as issueTypes from '../Types/issue-types'
import * as getAPI from '../../api/getAPI'
import * as postAPI from '../../api/postAPI'
import * as deleteAPI from '../../api/deleteAPI'

export const addIssue = data => {
    return async dispatch => {
        let getResponse = await postAPI.addIssueCall(data)
        if(getResponse.status === 200){
            let getIssues = await getAPI.getIssueCall()
            dispatch({
                type: issueTypes.ADDED_ISSUE,
                payload: getIssues.data
            })
        }
    }
}

export const getIssues = () => {
    return async dispatch => {
        let getResponse = await getAPI.getIssueCall()
        if(getResponse.status === 200){
            dispatch({
                type: issueTypes.GET_ISSUE,
                payload: getResponse.data
            })
        }
    }
}

export const getIssueDetail = id => {
    return async dispatch => {
        let getResponse = await getAPI.getIssueDetail(id)
        if(getResponse.status === 200){
            dispatch({
                type: issueTypes.GET_ISSUE_DETAIL,
                payload: getResponse.data
            })
        }
    }
}

export const resetSettings= () => {
    return {
        type: issueTypes.RESET_SETTINGS
    }
}