import React, { Component, PropTypes } from 'react';
import Button from './Button';
import * as icons from '../constants/icons';


export default class Footer extends Component {
    render(){
        const { changePosition, currentStep } = this.props;
        const { email, password, confirmPassword, date, gender} = this.props.inputs;

        switch (currentStep) {
            case 0: {
                const goToNextStep =  email.isValid && password.isValid && confirmPassword.isValid;
                const modificator = goToNextStep ? 'no-border' : 'no-border disabled';

                return(
                    <div className='card__footer'>
                        <Button
                            modificator={modificator}
                            text='Next'
                            clickHandler={changePosition}
                            step={1}
                            icon={icons.ARROW}
                        />
                    </div>
                )
            }

            case 1: {
                const goToNextStep = date.isValid && gender.isValid;
                const modificator = goToNextStep ? 'no-border' : 'no-border disabled';

                return (
                    <div className='card__footer'>
                        <Button
                            modificator='no-border'
                            text='Back'
                            clickHandler={changePosition}
                            step={-1}
                        />
                        <Button
                            modificator={modificator}
                            text='Next'
                            clickHandler={changePosition}
                            step={1}
                            icon={icons.ARROW}
                        />
                    </div>
                )
            }

            default:
               return null;
        }
    }
}

Footer.propTypes = {
    changePosition: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired
}