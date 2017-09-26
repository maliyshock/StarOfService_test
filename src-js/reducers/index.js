import {
    STEP_1_SUCCESS,
    STEP_2_SUCCESS,
    STEP_1_ERROR,
    STEP_2_ERROR,
} from '../constants/Constants'

const initialState = {
    currentStep: 1,
    title: 'Signup',
    formTemplates: [
        {status:false},
        {status:false}
    ],
    userData: []
};

export default function formstate(state = initialState, action) {
    switch (action.type) {
        case STEP_1_SUCCESS:
            return { ...state, formTemplates: [{status: action.playload},{status: false}]};

        case STEP_2_SUCCESS:
            return { ...state, formTemplates: [{status: action.playload},{status: action.playload}]};

        case STEP_1_ERROR:
            return {...state, };

        case STEP_2_ERROR:
            return state;

        default:
            return state;
    }
}
