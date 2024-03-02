// SmartphoneMockup.js

import React from 'react';
// CSS for styling the mockup
import BoostBiApp  from "../../Assets/boostbiapp.jpeg";

const SmartphoneMockup = ({ children, imageSrc }) => {
  return (
    <div className="smartphone-mockup">
      <div className="smartphone-screen">
        {imageSrc && <img src={BoostBiApp} alt="Smartphone Screen" className="smartphone-image" />}
        {children} {/* Render additional application content inside the smartphone screen */}
      </div>
    </div>
  );
};

export default SmartphoneMockup;
