import React from "react";
import PrimeAboutbg from "../../Assets/PrimeAboutbg.png";

import { BsFillPlayCircleFill } from "react-icons/bs";
import Aboutprime  from "../../Assets/Aboutprime.png";

const AboutGo = () => {
  const scrollToSection = () => {
    // Find the target section by its ID
    const targetSection = document.getElementById('primework');
    
    // Scroll to the target section smoothly
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchVideo = () => {
    window.open('https://www.youtube.com/watch?v=HpymRKApRc8', '_blank');
  };
  return (
    <div className="about-section-container-ai">
      <div className="about-background-image-container-prime">
        <img src={PrimeAboutbg} alt="" className="bg-img"/>
      </div>
      <div className="about-section-image-container">
        <img src={Aboutprime} alt="" className="go"/>
      </div>
      <div className="about-section-text-container">
       
        <h1 className="primary-heading">
          Ultima Prime
        </h1>
        <p className="primary-text">
        Explorez les zones les plus dynamiques de votre magasin !
        </p>
        <p className="primary-text">
        Obtenez des informations exploitables sur les zones les plus populaires de votre magasin et prenez des décisions basées sur les données pour l'aménagement du magasin. Effectuez des tests A/B pour le placement des produits, optimisez vos prix et stratégies marketing, et bien plus encore avec Ultima Prime.        </p>
        <div className="about-buttons-container">
          <button className="prime-demo-button" onClick={scrollToSection}>
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

export default AboutGo;
