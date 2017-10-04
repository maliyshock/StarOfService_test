import React, { Component, PropTypes } from 'react'
import Input from '../Input';


export default class Template_1 extends Component {
    render(){

        const { saveInputInfo, savePasswordInfo} = this.props;
        const { email, password, confirmPassword} = this.props.inputs;

        let template_1 =    <div className='card__content'>
                                <div className='form__row'>
                                    <Input
                                        type='email'
                                        name='email'
                                        placeholder='EMAIL IS REQUIRED'
                                        handler={saveInputInfo}
                                        step='1'
                                        input={email}
                                    />
                                </div>
                                <div className='form__row'>
                                    <Input
                                        type='password'
                                        name='password'
                                        placeholder='PASSWORD'
                                        handler={savePasswordInfo}
                                        step='1'
                                        input={password}
                                    />
                                </div>
                                <div className='form__row'>
                                    <Input
                                        type='password'
                                        name='confirmPassword'
                                        placeholder='CONFIRM PASSWORD'
                                        handler={savePasswordInfo}
                                        step='1'
                                        input={confirmPassword}
                                    />
                                </div>
                            </div>;

        return(template_1)
    }
}

Template_1.PropTypes = {
    saveInputInfo: PropTypes.func.isRequired,
    savePasswordInfo: PropTypes.func.isRequired,
    email: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired,
    confirmPassword: PropTypes.object.isRequired,
}