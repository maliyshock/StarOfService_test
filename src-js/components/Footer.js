import React, { Component, PropTypes } from 'react';
import Button from './Button';
import * as icons from '../constants/icons';


export default class Footer extends Component {
    render(){
        let footerTemplate;
        const { changePosition } = this.props;
        const { email, password, confirmPassword} = this.props.formTemplates[1].inputs;
        const { date, gender} = this.props.formTemplates[2].inputs;

        switch (this.props.currentStep) {
            case 1: {
                const goToNextStep =  email.isCorrect && password.isCorrect && confirmPassword.isCorrect;
                const modificator = goToNextStep ? 'no-border' : 'no-border disabled';

                footerTemplate =    <div className='card__footer'>
                                        <Button
                                            modificator={modificator}
                                            text='Next'
                                            clickHandler={changePosition}
                                            step='1'
                                            icon={icons.ARROW}
                                        />
                                    </div>;
                break;
            }

            case 2: {
                const goToNextStep = date.isCorrect && gender.isCorrect;
                const modificator = goToNextStep ? 'no-border' : 'no-border disabled';

                footerTemplate =    <div className='card__footer'>
                                        <Button
                                            modificator='no-border'
                                            text='Back'
                                            clickHandler={changePosition}
                                            step='-1'
                                        />
                                        <Button
                                            modificator={modificator}
                                            text='Next'
                                            clickHandler={changePosition}
                                            step='1'
                                            icon={icons.ARROW}
                                        />
                                    </div>;
                break;
            }
            case 3: {
                footerTemplate = null;
                break;
            }

            default:
                break;

        }
        return(footerTemplate)
    }
}

Footer.PropTypes = {
    changePosition: PropTypes.func.isRequired,
    email: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired,
    confirmPassword: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired,
    gender: PropTypes.object.isRequired
}