import React from 'react'
import { types } from '../types'
import Input from './Input'
import Select from './Select'

export default function DataItem({ name, value, onChangeName, onChangeValue, onDelete }) {
    return (
        <div className='d-flex m-4 justify-content-between align-items-center'>
            <div>
                <Input label='Field name' value={name} onChange={onChangeName} />
            </div>
            <div>
                <Select
                    label='Type'
                    value={value}
                    onChange={onChangeValue}
                    options={types}
                />
            </div>
            <div>
                <button className='btn btn-danger' onClick={onDelete}>Remove</button>
            </div>
        </div>
    )
}
