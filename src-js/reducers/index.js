import {
    INPUT_VALUE_SAVED,
    INPUT_CONFIRM_PASS_FAILED,
    CHANGE_POSITION,
    PRINT_DATA,
    INPUT_CONFIRM_PASS_VALID,
    INPUT_DATE_SAVED
} from '../constants/Constants'

const initialState = {
    currentStep: 0,
    inputs: {
        email: {
            value: null,
            isValid: null,
            error: null
        },
        password: {
            value: null,
            isValid: null,
            error: null
        },
        confirmPassword: {
            value: null,
            isValid: null,
            error: null
        },
        date: {
            value: {
                day: null,
                month: null,
                year: null
            },
            isValid: null
        },
        howHearAboutUs: null,
        gender: {
            value: null,
            isValid: null
        }
    },
    userData: {}
};

export default function formstate(state = initialState, action) {
    switch (action.type) {
        case INPUT_VALUE_SAVED: {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.payload.name]: {
                        value: action.payload.value,
                        isValid: action.payload.isValid,
                        error: action.payload.error
                    }
                }
            }
        }

        case INPUT_DATE_SAVED: {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    date: {
                        ...state.inputs.date,
                        value: {
                            ...state.inputs.date.value,
                            [action.payload.name]: action.payload.value
                        },
                        isValid: action.payload.isValid
                    }
                }
            }
        }

        case INPUT_CONFIRM_PASS_FAILED: {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.payload.name]: {
                        value: action.payload.value,
                        isValid: action.payload.isValid,
                        error: action.payload.error
                    },
                    confirmPassword: {
                        ...state.inputs['confirmPassword'],
                        ...{isValid: false}
                    }
                }
            }
        }

        case INPUT_CONFIRM_PASS_VALID: {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.payload.name]: {
                        value: action.payload.value,
                        isValid: action.payload.isValid,
                        error: action.payload.error
                    },
                    confirmPassword: {
                        ...state.inputs['confirmPassword'],
                        ...{isValid: true, error:''}
                    }
                }
            }
        }

        case CHANGE_POSITION: {
            return {...state, currentStep: action.payload};
        }

        case PRINT_DATA:
            return {...state, userData:{value: action.payload}} ;

        default:
            return state;
    }
}
