import React, { Component, PropTypes } from 'react'
import Input from '../Input';


export default class RegistrationDataTemplate extends Component {
    render(){

        const { saveInputHandler, index, currentStep} = this.props;
        const { email, password, confirmPassword} = this.props.inputs;
        const tabIndex = currentStep === index ? 1 : -1;

        return(
            <div className='card__content'>
                <div className='form__row'>
                    <Input
                        type='email'
                        name='email'
                        placeholder='EMAIL'
                        handler={saveInputHandler}
                        input={email}
                        tabIndex={tabIndex}
                    />
                </div>
                <div className='form__row'>
                    <Input
                        type='password'
                        name='password'
                        placeholder='PASSWORD'
                        notice='(minimum 6 characters)'
                        handler={saveInputHandler}
                        input={password}
                        tabIndex={tabIndex}
                    />
                </div>
                <div className='form__row'>
                    <Input
                        type='password'
                        name='confirmPassword'
                        placeholder='CONFIRM PASSWORD'
                        handler={saveInputHandler}
                        input={confirmPassword}
                        tabIndex={tabIndex}
                    />
                </div>
            </div>
        )
    }
}

RegistrationDataTemplate.propTypes = {
    saveInputHandler: PropTypes.func.isRequired,
}