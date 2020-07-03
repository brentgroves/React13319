import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import React from 'react';


export default function BarChart200221Scrap({ data }) {
  return (
      <BarChart width={530} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="part_number" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="actual_vrs_planned_percent" fill="#82ca9d" />
        <Bar dataKey="scrap_percent" fill="#8884d8" />
      </BarChart>

  );
}
