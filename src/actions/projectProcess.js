import axios from 'axios';

export const addProject = (data) => {
    return (dispatch) => {
        axios.post('/projects/add-project', data)
    }
}