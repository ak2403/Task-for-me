import axios from 'axios'
import { API_URL, userID, Authorization_header } from './config'

export const getProjects = () => {
    console.log(Authorization_header, userID)
    return axios.get(`${API_URL}/projects/${userID}`, Authorization_header)
        .then(response => {
            debugger
        })
        .catch(err => {
            debugger
        })
}