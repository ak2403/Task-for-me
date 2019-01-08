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

export const getProjectDetailCall = (id) => {
    return axios.get(`${configAPI.API_URL}/projects/${configAPI.userID}/${id}`)
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

export const getIssueCall = () => {
    return axios.get(`${configAPI.API_URL}/issues/${configAPI.userID}`)
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

export const getIssueDetail = id => {
    return axios.get(`${configAPI.API_URL}/issues/${configAPI.userID}/${id}`)
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