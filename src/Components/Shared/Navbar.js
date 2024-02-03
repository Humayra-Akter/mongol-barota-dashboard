import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-gray-800 h-16 p-4">
      <div className="flex items-center justify-center">
        <NavLink
          to="/science"
          currentPath={location.pathname}
          navigate={navigate}
        >
          Science
        </NavLink>
        <NavLink
          to="/autonomous"
          currentPath={location.pathname}
          navigate={navigate}
        >
          Autonomous
        </NavLink>
        <NavLink
          to="/communication"
          currentPath={location.pathname}
          navigate={navigate}
        >
          Communication
        </NavLink>
        <NavLink
          to="/mechanical"
          currentPath={location.pathname}
          navigate={navigate}
        >
          Mechanical
        </NavLink>
        <NavLink
          to="/electrical"
          currentPath={location.pathname}
          navigate={navigate}
        >
          Electrical
        </NavLink>
      </div>
    </div>
  );
};

const NavLink = ({ to, currentPath, navigate, children }) => {
  const isActive = currentPath === to;

  const handleClick = (e) => {
    e.preventDefault();
    if (!isActive) {
      navigate(to);
    }
  };

  return (
    <Link
      to={to}
      className={`mx-3 font-bold normal-case text-white hover:text-yellow-400 text-lg ${
        isActive ? "text-yellow-500" : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;