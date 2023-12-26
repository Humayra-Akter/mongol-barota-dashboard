import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Science = () => {
  return (
    <div>
      <div className="bg-gray-700 h-14 text-white font-bold">
        <div className="flex items-center justify-center mt-1">
          <Link to="/science">
            <button className="pr-10 uppercase mt-3">Soil</button>
          </Link>
          <Link to="/science/rock">
            <button className="uppercase mt-3">Rock</button>
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Science;
