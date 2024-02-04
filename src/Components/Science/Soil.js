import React from "react";
import Capture from "./Capture";
import protein from "../../images/protin_sample.png";
import Box from "./Box";

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
        </div>
      </div>
      <div>
        {/* <Capture /> */}
        <img src={protein} className="p-28" />
      </div>
    </div>
  );
};

export default Soil;
