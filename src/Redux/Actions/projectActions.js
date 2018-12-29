import * as projectTypes from '../Types/projectTypes'
import * as getAPI from '../../api/getAPI'
import * as postAPI from '../../api/postAPI'
import * as deleteAPI from '../../api/deleteAPI'

export const getProjects = () => {
    return async dispatch => {
        let getResponse = await getAPI.getProjectsCall()
    }
}

export const addProject = data => {
    return async dispatch => {
        let getResponse = await postAPI.addProjectCall(data)
    }
}