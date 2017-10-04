import React, { PropTypes, Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    handleChange(event) {
        const obj = event.target;
        const name = obj.getAttribute('name');
        const value = obj.value;
        const step = this.props.step;

        this.setState({
            value: event.target.value,
        });
        this.props.handler({name: name, value: value, step: step})
    }

    render() {
        const type = (this.props.type) ? this.props.type : 'text';
        let wrapperClassNames =  'input-wrapper';
        let inputClass = 'input-wrapper__input';

        if (this.state.value) {
            inputClass += ' freeze';
        }

        if(this.props.input && this.props.input.isCorrect === false) {
            wrapperClassNames = 'input-wrapper input-wrapper--has-error '
        }

        return (
            <div className={wrapperClassNames}>
                <input name={this.props.name}
                       id={this.props.name}
                       type={type}
                       value={this.state.value}
                       className={inputClass}
                       onChange={::this.handleChange}
                       tabIndex='-1'
                />
                <label htmlFor={this.props.name} className='input-wrapper__placeholder'>{this.props.placeholder}</label>
            </div>
        )
    }
}

Input.PropTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    step: PropTypes.number.isRequired,
    input: PropTypes.object.isRequired,
}
