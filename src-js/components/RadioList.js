import React, { Component, PropTypes } from 'react'

export default class RadioList extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler(event) {
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
        let values = [];
        this.props.values.forEach(
            (currentValue) => {
                values.push(
                    <div key={currentValue}>
                        <input
                            value={currentValue}
                            name={this.props.name}
                            id={currentValue}
                            type='radio'
                            className='form__radio'
                            onClick={::this.clickHandler}
                            tabIndex='-1'
                        />
                        <label
                            className='form__fake-radio'
                            htmlFor={currentValue}
                        >
                            {currentValue}
                        </label>
                    </div>
                )
            }
        );
        return (
            <div className='form__radio-list'>
                {values}
            </div>
        )
    }
}


RadioList.PropTypes = {
    values: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
    input: PropTypes.object.isRequired,
    handler: PropTypes.func.isRequired
}