import React, { PropTypes, Component } from 'react'
import Template_1 from './formTemplates/Template_1';
import Template_2 from './formTemplates/Template_2';
import Template_3 from './formTemplates/Template_3';
import ProgressBar from './Progress';
import Footer from './Footer';

export default class Card extends Component {
    render() {
        const { currentStep, changePosition, saveInputInfo, saveDateInfo,  formTemplates, savePasswordInfo, printData} = this.props;
        const title = currentStep > 2 ? 'Thank you!' : 'Signup';

        let cardContentWrapperClasses = 'card__content-wrapper';
        cardContentWrapperClasses += currentStep === 1 ? ' card__content-wrapper--step1': currentStep === 2 ? ' card__content-wrapper--step2': ' card__content-wrapper--step3';

        return (
            <div className='card'>
                <div className='card__head'>
                    <div className='card__title'>{title}</div>
                    <ProgressBar currentStep={currentStep} steps='3'/>
                </div>
                <div className='card__body'>
                    <div className={cardContentWrapperClasses}>
                        <Template_1 savePasswordInfo={savePasswordInfo} saveInputInfo={saveInputInfo} inputs={formTemplates[1]}  />
                        <Template_2 saveDateInfo={saveDateInfo} saveInputInfo={saveInputInfo} inputs={formTemplates[2]}  />
                        <Template_3 printData={printData} currentStep={currentStep}/>
                    </div>
                </div>
                <Footer changePosition={changePosition} formTemplates={formTemplates} currentStep={currentStep}/>
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