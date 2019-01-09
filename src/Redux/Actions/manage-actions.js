import * as manageTypes from '../Types/manage-types'
import * as getAPI from '../../api/getAPI'
import * as postAPI from '../../api/postAPI'
import * as deleteAPI from '../../api/deleteAPI'

export const getCompany = () => {
    return async dispatch => {
        let getResponse = await getAPI.getCompanyCall()
        if(getResponse.status === 200){
            dispatch({
                type: manageTypes.GET_COMPANY,
                payload: getResponse.data
            })
        }
    }
}