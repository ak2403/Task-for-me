import axios from 'axios';

export const addProject = (data) => {
    return (dispatch) => {
        axios.post('/projects/add-project', data)
    }
}

export const getSubProject = (data) => {
    return (dispatch) => {
        axios.post('/projects/get-sub-project', data)
            .then(res => {
                dispatch({
                    type: 'setProject',
                    payload: res.data
                })
            })
    }
}