import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import React from "react";

const RadarChartComponent = ({
  data,
  index,
  dataKey,
  gridArea,
  type = "RadarChart",
}) => {
  const customRadialAxis = (stat) => {
    const statInFrench = {
      energy: "Energie",
      cardio: "Cardio",
      intensity: "Intensité",
      speed: "Vitesse",
      strength: "Force",
      endurance: "Endurance",
    };
    return statInFrench[stat];
  };
  return (
    <div
      className="dashboard-component"
      style={{ gridArea }}
      id={`graph-${type}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          width={250}
          height={150}
          data={data}
          barSize={7}
          barGap={8}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          startAngle={90}
          endAngle={-270}
        >
          <>
            <PolarGrid radialLines={false} stroke="white" strokeWidth={1.3} />
            <PolarAngleAxis
              dataKey={index}
              stroke="white"
              fontSize={11}
              tickLine={false}
              tickFormatter={customRadialAxis}
            />
            <Radar dataKey={dataKey} fill="#ff0000" fillOpacity={0.6} />
          </>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;
