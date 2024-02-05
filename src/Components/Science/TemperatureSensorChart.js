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

const TemperatureSensorChart = () => {
  const data = [
    { month: "January", worldTemperature: 20, marsExperimental: -10 },
    { month: "February", worldTemperature: 22, marsExperimental: -8 },
    { month: "March", worldTemperature: 25, marsExperimental: -5 },
    { month: "April", worldTemperature: 28, marsExperimental: -2 },
    { month: "May", worldTemperature: 30, marsExperimental: 0 },
    { month: "June", worldTemperature: 32, marsExperimental: 2 },
    { month: "July", worldTemperature: 34, marsExperimental: 4 },
    { month: "August", worldTemperature: 32, marsExperimental: 2 },
    { month: "September", worldTemperature: 30, marsExperimental: 0 },
    { month: "October", worldTemperature: 28, marsExperimental: -2 },
    { month: "November", worldTemperature: 25, marsExperimental: -5 },
    { month: "December", worldTemperature: 22, marsExperimental: -8 },
  ];

  return (
    <div className="pl-20 mt-20">
      <p className="text-2xl">Temperature Sensor Data</p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="worldTemperature"
            stroke="red"
            name="World's Temperature (°C)"
          />
          <Line
            type="monotone"
            dataKey="marsExperimental"
            stroke="orange"
            name="Experimental Temperature of Mars (°C)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureSensorChart;
