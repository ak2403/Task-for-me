import axios from 'axios'
import * as configAPI from './config'

export const getProjectsCall = () => {
    return axios.get(`${configAPI.API_URL}/projects`, {
        headers: {
            Authorization: `Bearer `
        }
    })
        .then(response => {
            debugger
        })
        .catch(err => {
            return {
                status: 400
            }
        })
}