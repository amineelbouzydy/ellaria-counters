import React from "react";
import AiHomebg from "../../Assets/AiHomebg.png";
import UltimaAi  from "../../Assets/UltimaAi.png";

import { FiArrowRight } from "react-icons/fi";


const UltimaAiPresentation = () => {
  

  return (
    <div className="home-container">
      
      <div className="home-banner-container-ai">
        <div className="home-bannerImage-container">
          <img src={AiHomebg} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Capteur de comptage de personnes precis de 99%
          </h1>
          <p className="primary-text">
          Ultima AI revolutionizes people counting with AI on CHIP technology, accurately detecting age and gender without recording images, ensuring 100% privacy and market-leading accuracy.          </p>
          <button className="ai-demo-button">
          Obtenir une démo <FiArrowRight />{" "}
          </button>
          <button className="fixed-button">
          Obtenir une démo <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section-Ai">
          <img src={UltimaAi} alt="" className="nanoimage"/>
        </div>
      </div>
      
    </div>
  );
};

export default UltimaAiPresentation;
