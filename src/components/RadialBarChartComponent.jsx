import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

import React from "react";

const RadialBarChartComponent = ({
  data,
  dataKey,
  gridArea,
  type = "RadialBarChart",
}) => {
  const percentage = data[1].todayScore;
  return (
    <div
      className="dashboard-component"
      style={{ gridArea }}
      id={`graph-${type}`}
    >
      <div className="title-legend">
        <h2>Score</h2>
      </div>
      <h3>
        {percentage}%<span>de votre objectif</span>
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={data}
          barSize={7}
          barGap={8}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          startAngle={90}
          endAngle={450}
          background
          clockWise={true}
          cy="50%"
          innerRadius={75}
          outerRadius={85}
          // fill="white"
        >
          <>
            <RadialBar dataKey={dataKey} />
            <circle cx="50%" cy="50%" r="75" fill="white"></circle>
          </>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialBarChartComponent;
