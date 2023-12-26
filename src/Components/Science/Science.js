import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Science = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-1">
        <Link to="/science">
          <button className="bg-gray-700 hover:bg-yellow-800 px-4 py-2 text-white rounded-md font-bold uppercase mr-5">
            Soil
          </button>
        </Link>
        <Link to="/science/rock">
          <button className="bg-gray-700 hover:bg-yellow-800 px-4 py-2 text-white rounded-md font-bold uppercase ml-5">
            Rock
          </button>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Science;
