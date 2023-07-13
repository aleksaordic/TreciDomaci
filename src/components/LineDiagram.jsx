

import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function LineDiagram({ data }) {
  return (
    <ResponsiveContainer width='100%' aspect={22 / 9}>
      <LineChart
        data={data}
      >
        <XAxis dataKey='x' />
        <YAxis />
        <Tooltip />
        <Line dataKey='y' stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}
