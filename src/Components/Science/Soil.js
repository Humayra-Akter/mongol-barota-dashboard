import React from "react";
import Capture from "./Capture";
import protein from "../../images/protin_sample.png";
import protein2 from "../../images/protein.png";
import carbo from "../../images/carbo_benedict.jpg";
import ammonia from "../../images/ammonia.jpg";
import Box from "./Box";
import Boxes from "./Boxes";

const Soil = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <div>
          <div className="text-justify p-20">
            <p> *We used the buret reagent for the protein test. </p>
            <p>
              *The detection of Carbohydrate was done by using Benedict’s
              solution and Iodine solution.
            </p>
            <p>
              *The MQ135 gas sensor is used to detect the presence of ammonia or
              its ions in the soil.
            </p>
          </div>
        </div>
        <div>
          <Box />
          {/* <Boxes/> */}
        </div>
      </div>
      <div>
        <div className="p-20">{/* <Capture /> */}</div>
        <div className="flex gap-10 px-20 py-16">
          <div>
            <img src={protein} className="w-full h-80" />
            <p className="text-center font-bold">protein</p>
          </div>
          <div>
            <img src={protein2} className="w-full h-80" />
            <p className="text-center font-bold">protein test</p>
          </div>
        </div>
        <div className="flex gap-10 px-20">
          <div>
            <img src={carbo} className="w-full h-80" />
            <p className="text-center font-bold">carbohydrate</p>
          </div>
          <div>
            <img src={ammonia} className="w-full h-80" />
            <p className="text-center font-bold">ammonia test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soil;
