import * as projectTypes from '../Types/project-types'
import * as getAPI from '../../api/getAPI'
import * as postAPI from '../../api/postAPI'
import * as deleteAPI from '../../api/deleteAPI'

export const getProjects = () => {
    return async dispatch => {
        let getResponse = await getAPI.getProjectsCall()
        if(getResponse.status === 200){
            dispatch({
                type: projectTypes.GET_PROJECT,
                payload: getResponse.data
            })
        }
    }
}


export const addProject = data => {
    return async dispatch => {
        let getResponse = await postAPI.addProjectCall(data)
        if(getResponse.status === 200){
            let getProjects = await getAPI.getProjectsCall()
            dispatch({
                type: projectTypes.ADDED_PROJECT,
                payload: getProjects.data
            })
        }
    }
}