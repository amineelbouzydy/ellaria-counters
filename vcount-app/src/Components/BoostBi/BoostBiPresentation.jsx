import React from "react";
import Boostbg from "../../Assets/backgroundwave.png";
import BoostBi from "../../Assets/BoostBI.png";
import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";

const NanoPresentation = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container-boost">
          <img src={Boostbg} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Accédez à vos données d'analyse des visiteurs à tout moment et en tout lieu !
          </h1>
          <p className="primary-text">
          Accédez et visualisez facilement vos mesures de données de trafic avec des rapports personnalisables et obtenez une compréhension complète du comportement de vos clients, de l'entrée à la sortie.
          </p>
          <button className="nano-demo-button">
            <Link to="/contact" className="demo-link">
              Obtenir une démo
            </Link>
            <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BoostBi} alt="" className="nanoimage" />
        </div>
      </div>
    </div>
  );
};

export default NanoPresentation;
