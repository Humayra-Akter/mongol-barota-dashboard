import React from "react";
import coal from "../../images/Coal.jpg";
import limestone from "../../images/Limestone.jpg";
import sandstone from "../../images/Sandstone.jpg";
import shaleRock from "../../images/Shale_Rock.jpg";

const Rock = () => {
  const rockImages = [
    { name: "Coal", src: coal },
    { name: "Limestone", src: limestone },
    { name: "Sandstone", src: sandstone },
    { name: "Shale Rock", src: shaleRock },
  ];

  return (
    <div>
      <div className="mt-10">
        <p className="text-center">panorama image</p>
        <p className="text-center">microscopic image</p>
      </div>
      <div className="grid grid-cols-2 gap-10 p-10">
        {rockImages.map((rock, index) => (
          <div key={index} className="m-4">
            <img
              src={rock.src}
              alt={rock.name}
              className="max-w-full h-full rounded-md"
            />
            <p className="text-center mt-2 text-gray-700">{rock.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rock;
