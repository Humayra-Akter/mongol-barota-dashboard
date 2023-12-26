import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-16 p-4">
      <div className="flex items-center justify-center">
        <Link
          className="mx-3 font-bold normal-case text-white hover:text-secondary text-lg"
          to="/science"
        >
          Science
        </Link>
        <Link
          className="mx-3 font-bold normal-case text-white hover:text-secondary text-lg"
          to="/autonomous"
        >
          Autonomous
        </Link>
        <Link
          className="mx-3 font-bold normal-case text-white hover:text-secondary text-lg"
          to="/communication"
        >
          Communication
        </Link>
        <Link
          className="mx-3 font-bold normal-case text-white hover:text-secondary text-lg"
          to="/mechanical"
        >
          Mechanical
        </Link>
        <Link
          className="mx-3 font-bold normal-case text-white hover:text-secondary text-lg"
          to="/electrical"
        >
          Electrical
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
