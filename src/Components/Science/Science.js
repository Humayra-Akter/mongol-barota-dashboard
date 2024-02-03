import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Science = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName, path) => {
    setSelectedButton(buttonName);
    navigate(path);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-1">
        <button
          onClick={() => handleButtonClick("soil", "/science")}
          className={`bg-gray-700 hover:bg-yellow-600 px-4 py-2 text-white rounded-md font-bold uppercase mr-5 ${
            selectedButton === "soil" ? "bg-yellow-800" : ""
          }`}
        >
          Soil
        </button>
        <button
          onClick={() => handleButtonClick("rock", "/science/rock")}
          className={`bg-gray-700 hover:bg-yellow-600 px-4 py-2 text-white rounded-md font-bold uppercase ml-5 ${
            selectedButton === "rock" ? "bg-yellow-800" : ""
          }`}
        >
          Rock
        </button>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Science;
