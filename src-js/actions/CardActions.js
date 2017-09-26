import {
    STEP_1_SUCCESS,
} from '../constants/Constants'

export function checkTemplate() {
    console.log('check template');
    // return number;

    return (dispatch) => {
        // валидация.
        // если валидация пройдена то диспатчим success
        // если валидация не пройдена то диспатчим эррор - тем самым ставим форму и инпуты в состояние ошибки
        // если валидация пройдена то диспатчим success - тем самым снимая блок с кнопки
        dispatch({
            type: STEP_1_SUCCESS,
            playload: true
        })
    }
}

export function stepBackward(step) {
    console.log('stepBackward');
    return step;
}