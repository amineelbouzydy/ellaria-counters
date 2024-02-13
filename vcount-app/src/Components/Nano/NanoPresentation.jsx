import React from "react";
import Nanohomebg from "../../Assets/NanoHomebg.png";
import Nano from "../../Assets/Nano.png";

import { FiArrowRight } from "react-icons/fi";


const NanoPresentation = () => {
  

  return (
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={Nanohomebg} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Compter les personnes:
          facilite les opérations numériques des entreprises
          </h1>
          <p className="primary-text">
          Des solutions de comptage de personnes IoT efficaces, économes en énergie et fiables pour numériser la construction et à améliorer l'efficacité de la gestion de l'espace.          </p>
          <button className="nano-demo-button">
          Obtenir une démo <FiArrowRight />{" "}
          </button>
          <button className="fixed-button">
          Obtenir une démo <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={Nano} alt="" className="nanoimage"/>
        </div>
      </div>
      
    </div>
  );
};

export default NanoPresentation;
