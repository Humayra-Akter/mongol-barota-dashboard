import React, { useState } from "react";

const Box = () => {
  const [data, setData] = useState({
    p: { sample1: false, sample2: false, sample3: false },
    c1: { sample1: false, sample2: false, sample3: false },
    c2: { sample1: false, sample2: false, sample3: false },
    n: { sample1: false, sample2: false, sample3: false },
  });

  const handleClick = (sample, nutrient) => {
    setData((prevData) => ({
      ...prevData,
      [nutrient]: {
        ...prevData[nutrient],
        [sample]: !prevData[nutrient][sample],
      },
    }));
  };

  const getColor = (sample, nutrient) => {
    if (data[nutrient][sample]) {
      return "from-yellow-200 to-yellow-400"; // Gradient of yellow
    } else {
      return "from-gray-200 to-gray-400"; // Gradient of gray
    }
  };

  const getColumnColor = (nutrient) => {
    switch (nutrient) {
      case "p":
        return "bg-red-500";
      case "c1":
        return "bg-pink-500";
      case "c2":
        return "bg-green-500";
      case "n":
        return "bg-purple-500";
      default:
        return "";
    }
  };

  return (
    <div className="pl-20 flex flex-col space-y-4">
      <div className="pl-16 flex space-x-4">
        <div></div>
        {["p", "c1", "c2", "n"].map((nutrient) => (
          <div
            key={nutrient}
            className={`w-20 h-8 flex items-center justify-center rounded-full ${getColumnColor(
              nutrient
            )} text-white`}
          >
            {nutrient}
          </div>
        ))}
      </div>
      {["sample1", "sample2", "sample3"].map((sample) => (
        <div key={sample} className="flex space-x-4 items-center">
          <div className="font-bold">{sample}</div>
          {["p", "c1", "c2", "n"].map((nutrient) => (
            <div
              key={`${sample}-${nutrient}`}
              className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${getColor(
                sample,
                nutrient
              )} text-white`}
              onClick={() => handleClick(sample, nutrient)}
            >
              {/* Render round shape */}
              <div className="w-10 h-10 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Box;
