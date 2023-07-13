import React from 'react'
import DataItem from '../components/DataItem'

export default function DataStructurePage({
    structure,
    onChange
}) {
    return (
        <div className='container'>
            <div className='d-flex m-4 justify-content-between align-items-center' >
                <h2 className='text-center'>Define data structure</h2>
                <button onClick={() => {
                    onChange(prev => [...prev, { name: '', value: '' }])
                }} className='btn btn-primary'>
                    Add field
                </button>
            </div>
            <div>
                {
                    structure.map(element => {
                        return (
                            <DataItem
                                name={element.name}
                                value={element.value}
                                onChangeName={val => {
                                    onChange(prev => {
                                        return prev.map(e => {
                                            if (e === element) {
                                                return {
                                                    ...e,
                                                    name: val
                                                }
                                            };
                                            return e;
                                        })
                                    })
                                }}
                                onChangeValue={val => {
                                    onChange(prev => {
                                        return prev.map(e => {
                                            if (e === element) {
                                                return {
                                                    ...e,
                                                    value: val
                                                }
                                            };
                                            return e;
                                        })
                                    })
                                }}
                                onDelete={() => {
                                    onChange(prev => prev.filter(e => e !== element))
                                }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
