import React, { Component, PropTypes } from 'react'

export default class Button extends Component {
    clickHandler(event) {
        event.preventDefault();
        this.props.clickHandler();
    }

    render() {
        const { icon, text, modificator} = this.props;
        let iconTemplate;
        const classNames = `button ${modificator}`;

        iconTemplate = icon ? <span className='button__icon'>{icon}</span> : '' ;

        return (
            <button className={classNames} onClick={::this.clickHandler}>
                <span className='button__text'>{text}</span>
                {iconTemplate}
            </button>
        )
    }
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
}
