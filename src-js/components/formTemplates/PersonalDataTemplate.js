import React, { Component, PropTypes } from 'react'
import Date from '../Date';
import RadioList from '../RadioList';
import Select from '../Select';


export default class PersonalDataTemplate extends Component {
    render(){

        const { saveInputHandler , index, currentStep} = this.props;
        const { gender, date} = this.props.inputs;
        const tabIndex = currentStep === index ? 1 : -1;

        let selectOptions = ['Somwhere', 'Somehow', 'Internet'];

        return(
            <div className='card__content'>
                <Date
                    input={date}
                    handler={saveInputHandler}
                    title='Date of birth'
                    name='date'
                    tabIndex={tabIndex}
                />
                <h3 className='form__title'>Gender</h3>
                <RadioList
                    values={['Male', 'Female', 'Unspecified']}
                    name='gender'
                    input={gender}
                    handler={saveInputHandler}
                    tabIndex={tabIndex}
                />
                <h3 className='form__title'>Where did you hear about us?</h3>
                <Select
                    options={selectOptions}
                    handler={saveInputHandler}
                    name='howHearAboutUs'
                    tabIndex={tabIndex}
                />
            </div>
        )
    }
}

PersonalDataTemplate.propTypes = {
    saveInputHandler: PropTypes.func.isRequired
}
