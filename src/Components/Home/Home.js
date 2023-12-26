import React from "react";
import landing from "../../images/landing.jpg";

const Home = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center h-screen">
        <img
          className="object-cover w-full h-full"
          src={landing}
          alt="Landing Page"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-950 to-transparent"></div>
        <h1 className="text-8xl font-bold text-white absolute z-[1]">
          MIST MONGOL BAROTA
        </h1>
      </div>
    </div>
  );
};

export default Home;
