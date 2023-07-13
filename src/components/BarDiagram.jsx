import React from 'react'
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function BarDiagram({ data }) {
    return (
        <ResponsiveContainer width='100%' aspect={22 / 9}>
            <BarChart
                data={data}
            >
                <XAxis dataKey='x' />
                <YAxis />
                <Tooltip />
                <Bar dataKey='y' fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}
