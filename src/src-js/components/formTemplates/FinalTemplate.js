import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import * as icons from '../../constants/icons';
import classNames from 'classnames';

export default class FinalTemplate extends Component {
    render(){

        const {currentStep, subAction, index} = this.props;
        const isActive = currentStep === index ? true : false;

        let cardIconClassNames = classNames({
            'card__icon card__icon--ok': true,
            'card__icon--animated': isActive
        });

        return  (
            <div className='card__content'>
                <div className={cardIconClassNames}></div>
                <Button
                    text='Go to dashboard'
                    icon={icons.ARROW}
                    modificator='hovered centered'
                    clickHandler={subAction}
                />
            </div>
        )

    }
}


FinalTemplate.propTypes = {
    subAction: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired
}
