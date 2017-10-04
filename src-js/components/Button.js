import React, { Component, PropTypes } from 'react'

export default class Button extends Component {
    clickHandler(event) {
        event.preventDefault();
        this.props.clickHandler(parseInt(this.props.step));
    }

    render() {
        const { icon, text, modificator} = this.props;
        let iconTemplate;
        const classNames = `button ${modificator}`;

        iconTemplate = icon ? <span className='button__icon'>{icon}</span> : '' ;

        return (
            <button tabIndex='-1' className={classNames} onClick={::this.clickHandler}>
                <span className='button__text'>{text}</span>
                {iconTemplate}
            </button>
        )
    }
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    modificator: PropTypes.string,
    clickHandler: PropTypes.func
}
