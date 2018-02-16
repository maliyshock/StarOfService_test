import React, { Component, PropTypes } from 'react'

export default class Button extends Component {
    clickHandler(event) {
        event.preventDefault();
        this.props.clickHandler(parseInt(this.props.step));
    }

    render() {
        const { icon, text, modificator} = this.props;
        const classNames = `button ${modificator}`;

        return (
            <button tabIndex='-1' className={classNames} onClick={::this.clickHandler}>
                <span className='button__text'>{text}</span>
                {<span className='button__icon'>{icon}</span>}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
    modificator: PropTypes.string,
    clickHandler: PropTypes.func
}
