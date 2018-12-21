import axios from 'axios'
import { API_URL, Basic_header, Authorization_header } from './config'

export const loginCall = (data) => {
    return axios.post(`${API_URL}/api/login`, data, Basic_header)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            debugger
        })
}

export const AddCompanyCall = data => {
    console.log(data, Authorization_header)
    // return axios.post(`${API_URL}/api/add-company`, data, Authorization_header)
    //     .then(response => {
    //         debugger
    //     })
    //     .catch(err => {
    //         debugger
    //     })
}