import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import React from "react";

const LineChartComponent = ({
  data,
  index,
  dataKey,
  gridArea,
  type = "LineChart",
}) => {
  const customXaxis = (day) => {
    const dayByNumber = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };
    return dayByNumber[day];
  };
  const CustomToolTip = ({ active, payload }) => {
    if (payload && active) {
      return (
        <div className="tooltip">
          <p>{payload[0].value} min</p>
        </div>
      );
    }
  };
  return (
    <div
      className="dashboard-component"
      style={{ gridArea }}
      id={`graph-${type}`}
    >
      <div className="title-legend">
        <h2>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey={index}
            tickFormatter={customXaxis}
            tick={{ stroke: "white", strokeWidth: 1 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            domain={[-10, 20]}
            tickLine={false}
            axisLine={false}
            hide={true}
          />
          <Tooltip content={<CustomToolTip />} />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#ffffff"
            dot={false}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
