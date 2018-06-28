import isEmpty from 'lodash/isEmpty';
import axios from 'axios';

const initialState = {
    subProject: ''
};

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case 'setProject':
            return Object.assign({}, state, {
                subProject: action.payload.project.subProject
            });

        default: return state;
    }
}