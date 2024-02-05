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

const PHSensor = () => {
  const data = [
    { month: "January", worldPH: 7.2, marsExperimental: 6.5 },
    { month: "February", worldPH: 7.0, marsExperimental: 6.3 },
    { month: "March", worldPH: 7.5, marsExperimental: 6.8 },
    { month: "April", worldPH: 7.3, marsExperimental: 6.6 },
    { month: "May", worldPH: 7.1, marsExperimental: 6.4 },
    { month: "June", worldPH: 7.4, marsExperimental: 6.7 },
    { month: "July", worldPH: 7.6, marsExperimental: 6.9 },
    { month: "August", worldPH: 7.2, marsExperimental: 6.5 },
    { month: "September", worldPH: 7.3, marsExperimental: 6.6 },
    { month: "October", worldPH: 7.1, marsExperimental: 6.4 },
    { month: "November", worldPH: 7.5, marsExperimental: 6.8 },
    { month: "December", worldPH: 7.4, marsExperimental: 6.7 },
  ];

  return (
    <div className="pl-20 mt-20">
      <p className="text-2xl">PH Sensor Data</p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="worldPH"
            stroke="green"
            name="World's pH"
          />
          <Line
            type="monotone"
            dataKey="marsExperimental"
            stroke="blue"
            name="Experimental pH of Mars"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PHSensor;
