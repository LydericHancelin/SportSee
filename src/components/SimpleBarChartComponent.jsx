import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import React from "react";

const SimpleBarChartComponent = ({
  data,
  index,
  dataKey,
  gridArea,
  type = "BarChart",
}) => {
  const customXaxis = (date) => {
    const number = date.split("-")[2].split("0")[1];
    return number;
  };
  const CustomToolTip = ({ active, payload }) => {
    if (payload && active) {
      return (
        <div className="tooltip">
          <p>{payload[0].value} kg</p>
          <p>{payload[1].value} KCal</p>
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
        <h2>Activité quotidienne</h2>
        <div>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
          >
            <circle cx="50" cy="50" r="50" fill="black" />
          </svg>
          <p>Poids (Kg)</p>
        </div>
        <div>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
          >
            <circle cx="50" cy="50" r="50" fill="red" />
          </svg>
          <p>Calories brûlées (KCal)</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          barSize={10}
          barGap={8}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={index} tickFormatter={customXaxis} tickLine={false} />
          <YAxis
            dataKey={dataKey[0]}
            orientation="right"
            tickLine={false}
            axisLine={false}
            domain={["dataMin-7", "dataMax+3"]}
            yAxisId={dataKey[0]}
          />
          <YAxis
            dataKey={dataKey[1]}
            orientation="left"
            tickLine={false}
            axisLine={false}
            hide={true}
            domain={[0, "dataMax+30"]}
            yAxisId={dataKey[1]}
          />
          <Tooltip content={<CustomToolTip />} />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
          <Bar
            dataKey={dataKey[0]}
            yAxisId={dataKey[0]}
            fill="#282D30"
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey={dataKey[1]}
            yAxisId={dataKey[1]}
            fill="#e60000"
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChartComponent;
