import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import React from "react";
import PropTypes from "prop-types";

export default function BarChart200221DownTime({ data }) {
  return (
    <ResponsiveContainer width={500} height={175}>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="part_number" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="downtime_minutes" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
}

BarChart200221DownTime.propTypes = {
  data: PropTypes.array
};
