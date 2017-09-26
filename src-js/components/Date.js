import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div className='inlined'>
                <input name='day'
                       type='number'
                       className='form__input'
                />
                <input name='month'
                       type='number'
                       className='form__input'
                />
                <input name='year'
                       type='number'
                       className='form__input'
                />
            </div>
        )
    }
}