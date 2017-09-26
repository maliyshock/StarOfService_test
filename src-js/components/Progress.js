import React, { Component, PropTypes } from 'react'

export default class ProgressBar extends Component {
    render() {
        let progress = this.props.progress ? this.props.progress : 0;
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
    progress: PropTypes.number.isRequired,
}
