import axios from 'axios'
import * as configAPI from './config'

export const getProjectsCall = () => {
    return axios.get(`${configAPI.API_URL}/projects/${configAPI.userID}`)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            return {
                status: 400
            }
        })
}