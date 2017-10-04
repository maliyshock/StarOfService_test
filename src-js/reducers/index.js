import {
    INPUT_VALUE_SAVED,
    INPUT_CONFIRM_PASS_FAILED,
    CHANGE_POSITION,
    PRINT_DATA,
    INPUT_CONFIRM_PASS_CORRECT,
    INPUT_DATE_SAVED
} from '../constants/Constants'

const initialState = {
    currentStep: 1,
    formTemplates: {
        1: {
            inputs: {
                email: {
                    value: null,
                    isCorrect: null
                },
                password: {
                    value: null,
                    isCorrect: null
                },
                confirmPassword: {
                    value: null,
                    isCorrect: null
                }
            }
        },
        2: {
             inputs: {
                date: {
                    value: {
                        day: null,
                        month: null,
                        year: null
                    },
                    isCorrect: null
                },
                howHearAboutUs: null,
                gender: {
                    value: null,
                    isCorrect: null
                }
            }
        }
    },
    userData: {}
};

export default function formstate(state = initialState, action) {
    switch (action.type) {
        case INPUT_VALUE_SAVED: {

            return {
                ...state,
                formTemplates: {
                    ...state.formTemplates,
                    [action.playload.step]: {
                        status: action.playload.status,
                        inputs: {
                            ...state.formTemplates[action.playload.step].inputs,
                            [action.playload.name]: {
                                value: action.playload.value,
                                isCorrect: action.playload.isCorrect
                            }
                        }
                    }
                }
            }
        }

        case INPUT_DATE_SAVED: {
            return {
                ...state,
                formTemplates: {
                    ...state.formTemplates,
                    [action.playload.step]: {
                        status: action.playload.status,
                        inputs: {
                            ...state.formTemplates[action.playload.step].inputs,
                            [action.playload.name]: {
                                value: {
                                    ...state.formTemplates[action.playload.step].inputs[action.playload.name].value,
                                    ...action.playload.value
                                },
                                isCorrect: action.playload.isCorrect
                            }
                        }
                    }
                }
            }
        }

        case INPUT_CONFIRM_PASS_FAILED: {
            return {
                ...state,
                formTemplates: {
                    ...state.formTemplates,
                    [action.playload.step]: {
                        status: action.playload.status,
                        inputs: {
                            ...state.formTemplates[action.playload.step].inputs,
                            [action.playload.name]: {
                                value: action.playload.value,
                                isCorrect: action.playload.isCorrect
                            },
                            confirmPassword: {
                                ...state.formTemplates[action.playload.step].inputs['confirmPassword'],
                                ...{isCorrect: false}
                            }
                        }
                    }
                }
            }
        }

        case INPUT_CONFIRM_PASS_CORRECT: {
            return {
                ...state,
                formTemplates: {
                    ...state.formTemplates,
                    [action.playload.step]: {
                        status: action.playload.status,
                        inputs: {
                            ...state.formTemplates[action.playload.step].inputs,
                            [action.playload.name]: {
                                value: action.playload.value,
                                isCorrect: action.playload.isCorrect
                            },
                            confirmPassword: {
                                ...state.formTemplates[action.playload.step].inputs['confirmPassword'],
                                ...{isCorrect: true}
                            }
                        }
                    }
                }
            }
        }

        case CHANGE_POSITION: {
            return {...state, currentStep: action.playload};
        }

        case PRINT_DATA:
            console.log(action.playload);
            return {...state, userData:{value: action.playload}} ;

        default:
            return state;
    }
}
