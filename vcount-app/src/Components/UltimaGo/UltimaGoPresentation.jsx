import React from "react";
import GoHomebg from "../../Assets/GoHomebg.png";
import UltimaGo  from "../../Assets/UltimaGo.png";

import { FiArrowRight } from "react-icons/fi";


const UltimaGoPresentation = () => {
  

  return (
    <div className="home-container">
      
      <div className="home-banner-container-go">
        <div className="home-bannerImage-container-go">
          <img src={GoHomebg} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Le comptage des personnes simplifié
          </h1>
          <p className="primary-text">
          Solutions d'analyse des visiteurs rentables pour les petites et moyennes entreprises et l'industrie du transport dans son ensemble.</p>
          <button className="go-demo-button">
          Obtenir une démo <FiArrowRight />{" "}
          </button>
          <button className="fixed-button">
          Obtenir une démo <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section-Ai">
          <img src={UltimaGo} alt="" className="goimage"/>
        </div>
      </div>
      
    </div>
  );
};

export default UltimaGoPresentation;
