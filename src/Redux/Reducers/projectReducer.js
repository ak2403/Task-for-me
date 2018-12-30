import * as projectTypes from '../Types/project-types'

let initialState = {
    is_project_added: false,
    projects: []
}

const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case projectTypes.GET_PROJECT:
            return Object.assign({}, state, {
                projects: action.payload || []
            })

        case projectTypes.ADDED_PROJECT:
            return Object.assign({}, state, {
                is_project_added: true,
                projects: action.payload || []
            })

        case projectTypes.RESET_SETTINGS:
            return Object.assign({}, state, {
                is_project_added: false
            })

        default:
            return state
    }
}

export default ProjectReducer