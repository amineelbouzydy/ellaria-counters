import React from "react";
import AiAboutbg from "../../Assets/AiAboutbg.png";
import NanoSmall from "../../Assets/NanoSmall.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import UltimaAi  from "../../Assets/UltimaAi.png";

const AboutAi = () => {

  const handleWatchVideo = () => {
    window.open('https://www.youtube.com/watch?v=HpymRKApRc8', '_blank');
  };
  return (
    <div className="about-section-container-ai">
      <div className="about-background-image-container-ai">
        <img src={AiAboutbg} alt="" className="bg-img"/>
      </div>
      <div className="about-section-image-container">
        <img src={UltimaAi} alt="" className="nano"/>
      </div>
      <div className="about-section-text-container">
       
        <h1 className="primary-heading">
          Ultima Ai
        </h1>
        <p className="primary-text">
        Redéfinir le comptage des personnes avec précision et abordabilité
        </p>
        <p className="primary-text">
        Adapté à toutes les entreprises, Nano combine facilité d'installation, précision de 99 % avec une application mobile facile à utiliser. Installez commencez à voir vos données.
        </p>
        <div className="about-buttons-container">
          <button className="ai-demo-button">Learn More</button>
          <button className="watch-video-button" onClick={handleWatchVideo}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutAi;
