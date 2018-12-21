import * as getAPI from '../../api/getAPI'

export const getProjects = () => {
    return async dispatch => {
        let projectResponse = await getAPI.getProjects()
    }
}