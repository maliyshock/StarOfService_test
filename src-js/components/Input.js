import React, { PropTypes, Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }

    render() {
        const type = (this.props.type) ? this.props.type : 'text';
        let inputClass = 'input-wrapper__input';

        if (this.state.value) {
            inputClass += ' freeze';
        }

        return (
            <div className='input-wrapper'>
                <input name={this.props.name}
                       id={this.props.name}
                       type={type}
                       value={this.state.value}
                       className={inputClass}
                       onChange={::this.handleChange}
                />
                <label htmlFor={this.props.name} className='input-wrapper__placeholder'>{this.props.placeholder}</label>
            </div>
        )
    }
}

Input.PropTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}