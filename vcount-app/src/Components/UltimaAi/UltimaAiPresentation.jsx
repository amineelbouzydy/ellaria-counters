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
          Ultima AI révolutionne le comptage des personnes en détectant avec précision l'âge et le sexe sans enregistrer d'images, garantissant une confidentialité à 100%.       </p>
          <button className="ai-demo-button">
          Obtenir une démo <FiArrowRight />{" "}
          </button>
          <button className="fixed-button">
          Obtenir une démo <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section-Ai">
          <img src={UltimaAi} alt="" className="aiimage"/>
        </div>
      </div>
      
    </div>
  );
};

export default UltimaAiPresentation;
