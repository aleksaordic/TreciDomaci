import React, { useState } from 'react'
import AreaDiagram from '../components/AreaDiagram';
import BarDiagram from '../components/BarDiagram';
import LineDiagram from '../components/LineDiagram';
import Select from '../components/Select';
import { chartTypes, numberFields } from '../types'


export default function StatisticsPage({
    dataStructure,
    data,
}) {
    const [selectedGroupingFieldName, setSelectedGroupingFieldName] = useState('');
    const [selectedMainField, setSelectedMainField] = useState('');
    const [selectedChartType, setSelectedChartType] = useState('')
    const numberOptions = dataStructure.filter(element => {
        return numberFields.includes(element.value);
    })
    if (numberOptions.length === 0) {
        return (
            <div className='container'>
                <h2 className='text-center mt-3'>
                    Your structure neeeds to have at least one number type field
                </h2>
            </div>

        )
    }
    let parsedData = [];
    if (selectedChartType && selectedGroupingFieldName && selectedMainField) {
        const objMap = data.reduce((acc, obj) => {
            if (!acc[obj[selectedGroupingFieldName]]) {
                acc[obj[selectedGroupingFieldName]] = {
                    sum: 0,
                    count: 0
                };
            }
            acc[obj[selectedGroupingFieldName]].sum += obj[selectedMainField];
            acc[obj[selectedGroupingFieldName]].count++;
            return acc;
        }, {});
        parsedData = Object.keys(objMap).map(key => {
            return {
                x: key,
                y: objMap[key].sum / objMap[key].count
            }
        })
    }

    return (
        <div className='container'>
            <div>
                <Select label='Grouping field'
                    value={selectedGroupingFieldName}
                    onChange={setSelectedGroupingFieldName}
                    options={dataStructure.map(element => {
                        return {
                            name: element.name,
                            label: element.name,
                        }
                    })}
                />
                <Select label='Main field'
                    value={selectedMainField}
                    onChange={setSelectedMainField}
                    options={numberOptions.map(element => {
                        return {
                            name: element.name,
                            label: element.name,
                        }
                    })}
                />
                <Select label='Chart type'
                    value={selectedChartType}
                    onChange={setSelectedChartType}
                    options={chartTypes}
                />
            </div>
            {
                selectedChartType && selectedMainField && selectedGroupingFieldName && (
                    <>
                        {
                            selectedChartType === 'line' && (
                                <LineDiagram data={parsedData} />
                            )
                        }
                        {
                            selectedChartType === 'area' && (
                                <AreaDiagram data={parsedData} />
                            )
                        }
                        {
                            selectedChartType === 'bar' && (
                                <BarDiagram data={parsedData} />
                            )
                        }
                    </>
                )
            }
        </div>
    )
}
