import React, { PropTypes, Component } from 'react'

import classNames from 'classnames';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange(event) {
        const obj = event.target;
        const name = obj.getAttribute('name');
        const value = obj.value;

        this.setState({
            value: event.target.value,
        });
        this.props.handler({name: name, value: value})
    }

    render() {
        const type = this.props.type || 'text';
        let wrapperClassNames =  classNames({
            'input-wrapper': true,
            'input-wrapper--has-error': !this.props.input.isValid && (this.props.input.isValid !== null)
        })

        let inputClass = classNames({
            'input-wrapper__input': true,
            'freeze': this.state.value
        })

        return (
            <div className={wrapperClassNames}>
                <input name={this.props.name}
                       id={this.props.name}
                       type={type}
                       value={this.state.value}
                       className={inputClass}
                       onChange={::this.handleChange}
                       tabIndex={this.props.tabIndex}
                />
                <label htmlFor={this.props.name} className='input-wrapper__placeholder'><span>{this.props.placeholder}</span> <span>{this.props.input.error}</span></label>
            </div>
        )
    }
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    input: PropTypes.object.isRequired,
}
