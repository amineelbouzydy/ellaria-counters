import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Compter les personnes:
          facilite les opérations numériques des entreprises
          </h1>
          <p className="primary-text">
          Des solutions de comptage de personnes IoT efficaces, économes en énergie et fiables pour numériser la construction et à améliorer l'efficacité de la gestion de l'espace.          </p>
          <button className="secondary-button">
          Obtenir une démo <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" className="nanoimage"/>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
