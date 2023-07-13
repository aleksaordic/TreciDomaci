import React from 'react'
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function AreaDiagram({ data }) {
    return (
        <ResponsiveContainer width='100%' aspect={22 / 9}>
            <AreaChart
                data={data}
            >
                <XAxis dataKey='x' />
                <YAxis />
                <Tooltip />
                <Area dataKey='y' fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    )
}
