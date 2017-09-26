import React, { PropTypes, Component } from 'react'
import Input from './Input';
import Date from './Date';
import RadioList from './RadioList';
import ProgressBar from './Progress';
import Button from './Button';

export default class Card extends Component {
    render() {
        const { title, currentStep, checkTemplate, stepBackward} = this.props;

        let template_1 =  <div className='card__content'>
                            <div className='form__row'>
                                <Input
                                    type='email'
                                    name='email'
                                    placeholder='EMAIL IS REQUIRED'
                                />
                            </div>
                            <div className='form__row'>
                                <Input
                                    type='password'
                                    name='password'
                                    placeholder='PASSWORD'
                                />
                            </div>
                            <div className='form__row'>
                                <Input
                                    type='password'
                                    name='confirm_password'
                                    placeholder='CONFIRM PASSWORD'
                                />
                            </div>
                        </div>

        let template_2 = <div className='card__content'>
                            <div className='form__title'>Date of birth</div>
                            <Date/>
                            <div className='form__title'>Gender</div>
                            <RadioList/>
                        </div>

        let template_3 = <div className='card__content'>
                            <div className='icon'>icon</div>
                            <button> Go to dashboard</button>
                        </div>

        let templates = [template_1, template_2, template_3]

        let progress = (currentStep / templates.length) * 100;

        let footerTemplate

        switch (this.props.currentStep) {
            case 1: 
                footerTemplate =    <div className='card__footer'>
                                        <Button
                                            modificator='no-border disabled'
                                            text='Next'
                                            clickHandler={checkTemplate}
                                        />
                                    </div>
                break;
            case 2: 
                footerTemplate =    <div className='card__footer'>
                                        <Button
                                            modificator='no-border disabled'
                                            text='Back'
                                            onClick={stepBackward}
                                        />
                                        <Button
                                            modificator='no-border disabled'
                                            text='Next'
                                            onClick={checkTemplate}
                                        />
                                    </div>
                break;

        }

        return (
            <div className='card'>
                <div className='card__head'>
                    <div className='card__title'>{title}</div>
                    <ProgressBar progress={progress}/>
                </div>
                <div className='card__body'>
                    {templates[this.props.currentStep - 1]}
                </div>
                {footerTemplate}
            </div>
        )
    }
}

Card.PropTypes = {
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    nextButton: PropTypes.number.isRequired,
    backButton: PropTypes.number.isRequired,
}