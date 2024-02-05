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

const BioSensorChart = () => {
  const data = [
    { month: "January", worldHumidity: 5, marsExperimental: 3 },
    { month: "February", worldHumidity: 6, marsExperimental: 4 },
    { month: "March", worldHumidity: 5, marsExperimental: 5 },
    { month: "April", worldHumidity: 7, marsExperimental: 4 },
    { month: "May", worldHumidity: 8, marsExperimental: 3 },
    { month: "June", worldHumidity: 6, marsExperimental: 5 },
    { month: "July", worldHumidity: 7, marsExperimental: 6 },
    { month: "August", worldHumidity: 6, marsExperimental: 7 },
    { month: "September", worldHumidity: 5, marsExperimental: 6 },
    { month: "October", worldHumidity: 6, marsExperimental: 5 },
    { month: "November", worldHumidity: 7, marsExperimental: 4 },
    { month: "December", worldHumidity: 8, marsExperimental: 3 },
  ];

  return (
    <div className="pl-20 mt-20">
      <p className="text-2xl">Bio-Sensor Data</p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="worldHumidity"
            stroke="green"
            name="World's Humidity Threshold"
          />
          <Line
            type="monotone"
            dataKey="marsExperimental"
            stroke="blue"
            name="Experimental Data of Mars"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BioSensorChart;
