import React, { useState } from "react";

const Boxes = () => {
  const [data, setData] = useState({
    p: {
      pH: 6,
      hazardLevel: 3,
      solutionNeeded: "4.2 (20°C in H2O)",
      flammable: false,
    },
    c1: {
      hazardLevel: 0,
      pH: 3.55,
      solutionNeeded: "Same as NaOH",
      flammable: false,
    },
    c2: { pH: 8, hazardLevel: 10, solutionNeeded: "13-14", flammable: false },
    n: { pH: 8, hazardLevel: 10, solutionNeeded: "13-14", flammable: false },
  });
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

  const getColor = (nutrient, sample) => {
    const { pH, hazardLevel, flammable } = data[nutrient];

    switch (sample) {
      case "sample1":
        if (pH > 4 && pH < 12) {
          return "from-green-200 to-green-500"; // Green color for pH between 4 and 12
        } else {
          return "from-red-200 to-red-500"; // Red color otherwise
        }
      case "sample2":
        if (hazardLevel >= 3 && hazardLevel <= 4) {
          return "from-green-200 to-green-500"; // Green color for hazard level between 3 and 4
        } else {
          return "from-red-200 to-red-500"; // Red color otherwise
        }
      case "sample3":
        if (flammable === false) {
          return "from-green-200 to-green-500"; // Green color if not flammable
        } else {
          return "from-red-200 to-red-500"; // Red color otherwise
        }
      default:
        return "";
    }
  };

  return (
    <div className="pl-20 flex flex-col space-y-4">
      <div className="flex space-x-4">
        <div></div>
        {["p", "c1", "c2", "n"].map((nutrient) => (
          <div
            key={nutrient}
            className={`w-20 h-8 flex items-center justify-center rounded-full bg-gradient-to-br ${getColumnColor(
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
                nutrient,
                sample
              )} text-white`}
            >
              {/* Render round shape */}
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Boxes;
