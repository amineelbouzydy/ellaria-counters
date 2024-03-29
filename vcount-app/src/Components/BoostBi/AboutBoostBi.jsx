import React from "react";

import { BsFillPlayCircleFill } from "react-icons/bs";

import smartphoneImage from '../../Assets/boostbiapp.jpeg';
import SmartphoneMockup from './SmartphoneMockup';
const AboutBoostBi = () => {

  const handleWatchVideo = () => {
    window.open('https://www.youtube.com/watch?v=HpymRKApRc8', '_blank');
  };
  const scrollToSection = () => {
    // Find the target section by its ID
    const targetSection = document.getElementById('boostbiwork');
    
    // Scroll to the target section smoothly
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="about-section-container-boost">
      
      <div className="about-section-image-container">
      <SmartphoneMockup imageSrc={smartphoneImage}>
      {/* Your application content goes here */}
      
    </SmartphoneMockup>
      </div>
      <div className="about-section-text-container">
       
        <h1 className="primary-heading">
          BoostBI
        </h1>
        <p className="primary-text">
            Simplifiez l'accessibilité des données de vos visiteurs
        </p>
        <p className="primary-text">
        BoostBI propose une solution. Il vous libère de votre bureau, vous permettant de suivre le trafic piétonnier, de surveiller les performances et d'utiliser des analyses avancées, le tout depuis votre appareil mobile.        </p>
        <div className="about-buttons-container">
        <button className="nano-demo-button" onClick={scrollToSection}>
      Learn More
    </button>
          <button className="watch-video-button" onClick={handleWatchVideo}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutBoostBi;
