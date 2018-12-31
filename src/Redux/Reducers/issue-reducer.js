import * as issueTypes from '../Types/issue-types'

let initialState = {
    is_issue_added: false,
    issues: []
}

const IssueReducer = (state = initialState, action) => {
    switch (action.type) {
        case issueTypes.GET_ISSUE:
            return Object.assign({}, state, {
                issues: action.payload || []
            })

        case issueTypes.ADDED_ISSUE:
            return Object.assign({}, state, {
                is_issue_added: true,
                issues: action.payload || []
            })

        case issueTypes.RESET_SETTINGS:
            return Object.assign({}, state, {
                is_issue_added: false
            })

        default:
            return state
    }
}

export default IssueReducer