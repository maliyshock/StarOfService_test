import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import * as icons from '../../constants/icons';


export default class Template_3 extends Component {
    render(){

        const {currentStep, printData} = this.props;

        let cardIconClassNames = 'card__icon card__icon--ok';
        cardIconClassNames += currentStep === 3 ? ' card__icon--animated' : '';

        let template_3 =    <div className='card__content'>
                                <div className={cardIconClassNames}></div>
                                <Button
                                    text='Go to dashboard'
                                    icon={icons.ARROW}
                                    modificator='hovered centered'
                                    clickHandler={printData}
                                />
                            </div>;

        return(template_3)
    }
}


Template_3.PropTypes = {
    printData: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired
}
