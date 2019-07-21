import React from "react";
import {
  LineChart,
  Line,
  Label,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

function Chart({ weather }) {
  return (
    <LineChart
      width={400}
      height={400}
      data={weather}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="date">
        <Label value="Date" offset={0} position="insideBottom" />
      </XAxis>
      <YAxis
        label={{ value: "Temperature", angle: -90, position: "insideLeft" }}
      />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
    </LineChart>
  );
}
export default Chart;
