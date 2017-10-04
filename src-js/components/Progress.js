import React, { Component, PropTypes } from 'react'

export default class ProgressBar extends Component {
    render() {
        let progress = (this.props.currentStep / this.props.steps) * 100;

        const style = {
            transform: `translateX(calc(-100% + ${progress}%))`
        }
        return (
            <div className='progress-bar'>
                <div className='progress-bar__indicator' style={style} ></div>
            </div>
        )
    }
}

ProgressBar.PropTypes = {
    currentStep: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
}
