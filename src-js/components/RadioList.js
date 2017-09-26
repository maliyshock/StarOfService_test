import React, { Component } from 'react'

export default class RadioList extends Component {
    render() {
        return (
            <div className='inlined'>
                <input value='male'
                       name='gender'
                       id='male'
                       type='radio'
                       className='dnone'
                />
                <label className='form__radio' htmlFor='male'>Male</label>

                <input value='female'
                       name='gender'
                       id='female'
                       type='radio'
                       className='dnone'
                />
                <label className='form__radio' htmlFor='female'>Female</label>

                <input value='unspecified'
                       name='gender'
                       id='femunspecifiedale'
                       type='radio'
                       className='dnone'
                />
                <label className='form__radio' htmlFor='unspecified'>Unspecified</label>
            </div>
        )
    }
}