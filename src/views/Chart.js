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
      width={600}
      height={400}
      data={weather}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="date" interval="preserveStart">
        <Label value="date" offset={0} position="insideBottom" />
      </XAxis>
      <YAxis
        interval="preserveStart"
        label={{ value: "Temperature", angle: -90, position: "insideLeft" }}
      />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#ff7300"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="humidity"
        stroke="#dd1900"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="pressure"
        stroke="#123545"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
export default Chart;
