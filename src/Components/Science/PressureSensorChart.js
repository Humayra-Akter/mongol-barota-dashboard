import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PressureSensorChart = () => {
  const data = [
    { month: "January", worldPressure: 1013, marsExperimental: 720 },
    { month: "February", worldPressure: 1015, marsExperimental: 722 },
    { month: "March", worldPressure: 1012, marsExperimental: 718 },
    { month: "April", worldPressure: 1010, marsExperimental: 716 },
    { month: "May", worldPressure: 1008, marsExperimental: 714 },
    { month: "June", worldPressure: 1007, marsExperimental: 713 },
    { month: "July", worldPressure: 1005, marsExperimental: 711 },
    { month: "August", worldPressure: 1003, marsExperimental: 709 },
    { month: "September", worldPressure: 1005, marsExperimental: 711 },
    { month: "October", worldPressure: 1008, marsExperimental: 714 },
    { month: "November", worldPressure: 1010, marsExperimental: 716 },
    { month: "December", worldPressure: 1012, marsExperimental: 718 },
  ];

  return (
    <div className="pl-20 mt-20">
      <p className="text-2xl">Pressure Sensor Data</p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="worldPressure"
            stroke="purple"
            name="World's Pressure (hPa)"
          />
          <Line
            type="monotone"
            dataKey="marsExperimental"
            stroke="grey"
            name="Experimental Pressure of Mars (hPa)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PressureSensorChart;
