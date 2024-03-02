import React from "react";
import PrimeHomebg from "../../Assets/PrimeHomebg.png";
import UltimaPrime  from "../../Assets/UltimaPrime.png";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";


const UltimaPrimePresentation = () => {
  

  return (
    <div className="home-container">
      
      <div className="home-banner-container-ai">
      <div className="home-bannerImage-container-prime">
          <img src={PrimeHomebg} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Découvrez la puissance de l'analyse de zone
          </h1>
          <p className="primary-text">
          Obtenez des informations précieuses sur les zones les plus stratégiques de votre magasin pour prendre des décisions basées sur les données concernant l'aménagement, le placement des produits, les prix et les stratégies marketing, avec Ultima Prime.       </p>
          <button className="prime-demo-button">
            <Link to="/contact" className="demo-link">
              Obtenir une démo
            </Link>
            <FiArrowRight />{" "}
          </button>
          
        </div>
        
        <div className="home-image-section-prime">
          <img src={UltimaPrime} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default UltimaPrimePresentation;
