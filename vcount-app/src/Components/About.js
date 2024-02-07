import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {

  const handleWatchVideo = () => {
    window.open('https://www.youtube.com/watch?v=HpymRKApRc8', '_blank');
  };
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" className="bg-img"/>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" className="nano"/>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">A propos</p>
        <h1 className="primary-heading">
          Nano
        </h1>
        <p className="primary-text">
        Redéfinir le comptage des personnes avec précision et abordabilité
        </p>
        <p className="primary-text">
        Adapté à toutes les entreprises, Nano combine facilité d'installation, précision de 99 % avec une application mobile facile à utiliser. Installez commencez à voir vos données.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button" onClick={handleWatchVideo}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
