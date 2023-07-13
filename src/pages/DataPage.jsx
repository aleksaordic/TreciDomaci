import React, { useState } from 'react'
import Input from '../components/Input'

export default function DataPage({
    data,
    dataStructure,
    onGenerate,
    onReset
}) {
    const [total, setTotal] = useState(0);
    return (
        <div className='container' >
            <div className='d-flex m-4 justify-content-between align-items-center' >
                <h2 className='text-center'>Test data</h2>
                <div>
                    <Input type='number'
                        label='Total amount'
                        value={total}
                        onChange={val => {
                            const nVal = Number(val);
                            setTotal(prev => {
                                if (nVal < 1 || nVal > 1000) {
                                    return prev;
                                }
                                return nVal;
                            })
                        }}
                    />
                    <div className='btn-group mt-1' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <button
                            disabled={dataStructure.length === 0}
                            style={{ flex: '1' }} onClick={() => {
                                onGenerate(total)
                            }} className='btn btn-primary'>
                            Generate
                        </button>
                        <button style={{ flex: '1' }} onClick={onReset} className='btn btn-secondary'>
                            Reset
                        </button>
                    </div>

                </div>
            </div>
            <div className='mt-4'>
                <table className='table'>
                    <thead>
                        <tr>
                            {
                                dataStructure.map(element => {
                                    return (
                                        <th key={element.name}>{`${element.name} (${element.value})`}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(row => {
                                return (
                                    <tr>
                                        {
                                            dataStructure.map(element => {
                                                return (
                                                    <td key={element.name}>{row[element.name]}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
