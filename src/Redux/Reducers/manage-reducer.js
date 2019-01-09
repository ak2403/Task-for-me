import * as manageTypes from '../Types/manage-types'

let initialState = {
    company_details: {}
}

const ManageReducer = (state = initialState, action) => {
    switch (action.type) {
        case manageTypes.GET_COMPANY:
            return Object.assign({}, state, {
                company_details: action.payload || {}
            })

        case manageTypes.RESET_SETTINGS:
            return Object.assign({}, state, {
            })

        default:
            return state
    }
}

export default ManageReducer