import React from 'react'

export default function Input({ label, value, onChange, type }) {
    return (
        <div className='form-group'>
            <label>{label}</label>
            <input type={type} className='form-control' value={value} onChange={e => onChange(e.currentTarget.value)} />
        </div>
    )
}
