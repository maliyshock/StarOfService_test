import {
    INPUT_VALUE_SAVED,
    INPUT_CONFIRM_PASS_FAILED,
    INPUT_DATE_SAVED,
    PRINT_DATA,
    INPUT_CONFIRM_PASS_CORRECT,
    CHANGE_POSITION
} from '../constants/Constants'

function isCorrectEmail(value) {
    let regTemplate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regTemplate.test(value);
}

function isCorrectPassword(value) {
    return value.length > 6;
}
function isCorrectGender(value) {
    return value.length > 0;
}

function findDateValue(item, getState, key){
    const store = getState();
    if(item === undefined) {
        return store.formTemplates[2].inputs.date.value[key];
    } else {
        return item;
    }
}

function isCorrectDate(value, getState) {
    let day = value.day;
    let year = value.year;
    let month = value.month;

    day = findDateValue(day, getState, 'day');
    year = findDateValue(year, getState, 'year');
    month = findDateValue(month, getState, 'month');

    if(day && month && year) {
        const currentDate = new Date().getFullYear();
        const userDate = new Date(year, month, day);
        const delta = Math.round( (currentDate - userDate.getFullYear()) );
        return delta > 18;
    } else {
        return null;
    }
}

function isPaswordsSame(value, store, targetName) {
    return value === store.formTemplates[store.currentStep].inputs[targetName].value
}

export function savePasswordInfo(obj) {
    return (dispatch, getState) => {
        const store = getState();

        switch(obj.name) {
            case 'password': {
                    obj.isCorrect = isCorrectPassword(obj.value);
                    if(store.formTemplates[store.currentStep].inputs.confirmPassword.value) {
                        if(!isPaswordsSame(obj.value, store, 'confirmPassword')) {
                            dispatch({
                                type: INPUT_CONFIRM_PASS_FAILED,
                                playload: obj
                            })
                        } else {
                            dispatch({
                                type: INPUT_CONFIRM_PASS_CORRECT,
                                playload: obj
                            })
                        }
                    } else {
                        dispatch({
                            type: INPUT_VALUE_SAVED,
                            playload: obj
                        })
                    }
                break
            }
            case 'confirmPassword': {
                obj.isCorrect = isPaswordsSame(obj.value, store, 'password');
                dispatch({
                    type: INPUT_VALUE_SAVED,
                    playload: obj
                })
                break
            }

            default:
                break;
        }
    }
}

export function saveDateInfo(obj) {
    return (dispatch, getState) => {
        obj.isCorrect = isCorrectDate(obj.value, getState);
        dispatch({
            type: INPUT_DATE_SAVED,
            playload: obj
        })
    }
}

export function saveInputInfo(obj) {
    return (dispatch) => {
        switch(obj.name) {
            case 'email': {
                obj.isCorrect = isCorrectEmail(obj.value);
                break
            }

            case 'gender': {
                obj.isCorrect = isCorrectGender(obj.value);
                break
            }
            default:
                break;
        }

        dispatch({
            type: INPUT_VALUE_SAVED,
            playload: obj
        })
    }
}

export function changePosition(step) {
    return (dispatch, getState) => {
        const newStep = getState().currentStep + step;

        dispatch({
            type: CHANGE_POSITION,
            playload: newStep
        })
    }
}

export function printData() {
    return (dispatch, getState) => {
        const store = getState();
        const firstTemplate = store.formTemplates[1].inputs;
        const secondTemplate = store.formTemplates[2].inputs;
        const dateInMiliSeconds = new Date (secondTemplate.date.value.year,secondTemplate.date.value.month, secondTemplate.date.value.day).getTime();
        const data = {email: firstTemplate.email, password: firstTemplate.password, date_of_birth: dateInMiliSeconds, gender: secondTemplate.gender,how_hear_about_us: secondTemplate.howHearAboutUs}

        dispatch({
            type: PRINT_DATA,
            playload: data
        })
    }
}
