import React, { Component, PropTypes } from 'react'
import Date from '../Date';
import RadioList from '../RadioList';
import Select from '../Select';


export default class Template_2 extends Component {
    render(){

        const { saveInputInfo, saveDateInfo} = this.props;
        const { gender, date} = this.props.inputs;

        let selectOptions = ['Somwhere', 'Somehow', 'Internet'];
        let template_2 =    <div className='card__content'>
                                <Date
                                    step='2'
                                    input={date}
                                    handler={saveDateInfo}
                                    title='Date of birth'
                                    name='date'
                                />
                                <h3 className='form__title'>Gender</h3>
                                <RadioList
                                    values={['Male', 'Female', 'Unspecified']}
                                    name='gender'
                                    step='2'
                                    input={gender}
                                    handler={saveInputInfo}
                                />
                                <h3 className='form__title'>Where did you hear about us?</h3>
                                <Select
                                    options={selectOptions}
                                    handler={saveInputInfo}
                                    name='howHearAboutUs'
                                    step='2'
                                />
                            </div>;

        return(template_2)
    }
}

Template_2.PropTypes = {
    saveInputInfo: PropTypes.func.isRequired,
    saveDateInfo: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired,
    gender: PropTypes.object.isRequired
}
