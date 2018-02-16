import {
    INPUT_VALUE_SAVED,
    INPUT_CONFIRM_PASS_FAILED,
    INPUT_DATE_SAVED,
    PRINT_DATA,
    INPUT_CONFIRM_PASS_VALID,
    CHANGE_POSITION
} from '../constants/Constants'

function isEmailValid(value) {
    let regTemplate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regTemplate.test(value);
}

const isPasswordValid = (value) => value.length > 6;
const isGenderValid = (value)=>value.length > 0;

function findValueDate(item, getState, key){
    const store = getState();
    if(item === undefined) {
        return store.inputs.date.value[key];
    } else {
        return item;
    }
}

function isDateValid(value, getState) {
    let day = value.day;
    let year = value.year;
    let month = value.month;

    day = findValueDate(day, getState, 'day');
    year = findValueDate(year, getState, 'year');
    month = findValueDate(month, getState, 'month');

    if(day && month && year) {
        const currentDate = new Date().getFullYear();
        const userDate = new Date(year, month, day);
        const delta = Math.round( (currentDate - userDate.getFullYear()) );
        return delta > 18;
    } else {
        return null;
    }
}

function isSamePaswords(value, store, targetName) {
    return value === store.inputs[targetName].value
}

export function saveInputHandler(obj) {
    return (dispatch, getState) => {
        const store = getState();

        switch(obj.name) {
            case 'email': {
                obj.isValid = isEmailValid(obj.value);
                obj.error = obj.isValid ? '' : 'is not valid';
                break
            }

            case 'gender': {
                obj.isValid = isGenderValid(obj.value);
                break
            }

            case 'password': {
                obj.isValid = isPasswordValid(obj.value);

                if(store.inputs.confirmPassword.value) {
                    if(!isSamePaswords(obj.value, store, 'confirmPassword')) {
                        if (!obj.isValid) {
                            obj.error = 'should be 6 characters minimum';
                        } else {
                            obj.error = 'not the same';
                        }

                        dispatch({
                            type: INPUT_CONFIRM_PASS_FAILED,
                            payload: obj
                        })
                    } else {
                        obj.error = '';
                        dispatch({
                            type: INPUT_CONFIRM_PASS_VALID,
                            payload: obj
                        })
                    }
                } else {
                    obj.error = obj.isValid ? '' : 'should be 6 characters minimum';
                    dispatch({
                        type: INPUT_VALUE_SAVED,
                        payload: obj
                    })
                }
                break
            }

            case 'confirmPassword': {
                obj.isValid = isSamePaswords(obj.value, store, 'password');
                obj.error = obj.isValid ? '' : 'not the same';
                dispatch({
                    type: INPUT_VALUE_SAVED,
                    payload: obj
                })
                break
            }

            case 'day':
            case 'month':
            case 'year': {
                obj.isValid = isDateValid(obj.value, getState);
                dispatch({
                    type: INPUT_DATE_SAVED,
                    payload: obj
                })
                break;
            }

            default:
                break;
        }

        dispatch({
            type: INPUT_VALUE_SAVED,
            payload: obj
        })
    }
}

export function changePosition(step) {
    return (dispatch, getState) => {
        const newStep = getState().currentStep + step;

        dispatch({
            type: CHANGE_POSITION,
            payload: newStep
        })
    }
}

export function printData() {
    return (dispatch, getState) => {
        const store = getState();
        const inputs = store.inputs;
        const dateInMiliSeconds = new Date (inputs.date.value.year,inputs.date.value.month, inputs.date.value.day).getTime();
        const data = {email: inputs.email, password: inputs.password, date_of_birth: dateInMiliSeconds, gender: inputs.gender,how_hear_about_us: inputs.howHearAboutUs}
        console.log(data);

        dispatch({
            type: PRINT_DATA,
            payload: data
        })
    }
}
