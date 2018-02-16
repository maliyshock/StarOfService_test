import React, { Component, PropTypes } from 'react'

export default class RadioList extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler(event) {
        const obj = event.target;
        const name = obj.getAttribute('name');
        const value = obj.value;

        this.setState({
            value: event.target.value,
        });
        this.props.handler({name: name, value: value})
    }

    render() {
        return (
            <div className='form__radio-list'>
                {
                    this.props.values.map(
                        (currentValue) => {
                            return(
                                <div key={currentValue}>
                                    <input
                                        value={currentValue}
                                        name={this.props.name}
                                        id={currentValue}
                                        type='radio'
                                        className='form__radio'
                                        onClick={::this.clickHandler}
                                        tabIndex={this.props.tabIndex}
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
                    )
                }
            </div>
        )
    }
}


RadioList.propTypes = {
    values: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    handler: PropTypes.func.isRequired
}