import React, { PropTypes, Component } from 'react'
import RegistrationDataTemplate from './formTemplates/RegistrationDataTemplate';
import PersonalDataTemplate from './formTemplates/PersonalDataTemplate';
import FinalTemplate from './formTemplates/FinalTemplate';
import ProgressBar from './Progress';
import Footer from './Footer';

const templates = [RegistrationDataTemplate, PersonalDataTemplate, FinalTemplate];

export default class Card extends Component {
    render() {
        const { currentStep, changePosition, saveInputHandler,  inputs, printData} = this.props;
        const title = currentStep > 1 ? 'Thank you!' : 'Signup';

        let cardContentWrapperPosition = {
            transform: 'translateX('+(-currentStep * 100)+'%)'
        }

        return (
            <div className='card'>
                <div className='card__head'>
                    <div className='card__title'>{title}</div>
                    <ProgressBar currentStep={currentStep} steps={templates.length}/>
                </div>
                <div className='card__body'>
                    <div className='card__content-wrapper' style={cardContentWrapperPosition}>
                        { templates.map(
                            (Template, index) =>    <Template
                                                        key={index}
                                                        index={index}
                                                        subAction={printData}
                                                        saveInputHandler={saveInputHandler}
                                                        inputs={inputs}
                                                        currentStep={currentStep}
                                                    />
                        )}
                    </div>
                </div>
                <Footer changePosition={changePosition} inputs={inputs} currentStep={currentStep}/>
            </div>
        )
    }
}

Card.propTypes = {
    currentStep: PropTypes.number.isRequired,
    changePosition: PropTypes.func.isRequired,
    saveInputHandler: PropTypes.func.isRequired,
    inputs: PropTypes.object.isRequired,
    printData: PropTypes.func.isRequired
}