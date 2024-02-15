import React from "react";
import GoAboutbg from "../../Assets/GoAboutbg.png";

import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutUltimaGo  from "../../Assets/AboutUltimaGo.png";

const AboutGo = () => {

  const handleWatchVideo = () => {
    window.open('https://www.youtube.com/watch?v=HpymRKApRc8', '_blank');
  };
  return (
    <div className="about-section-container-ai">
      <div className="about-background-image-container-ai">
        <img src={GoAboutbg} alt="" className="bg-img"/>
      </div>
      <div className="about-section-image-container">
        <img src={AboutUltimaGo} alt="" className="go"/>
      </div>
      <div className="about-section-text-container">
       
        <h1 className="primary-heading">
          Ultima Go
        </h1>
        <p className="primary-text">
        Redéfinir le comptage des personnes avec précision et abordabilité
        </p>
        <p className="primary-text">
        V-Count Ultima Go is the next-generation people
counting sensor with the highest accuracy on the
market and advanced sensing capabilities. 
        </p>
        <div className="about-buttons-container">
          <button className="go-demo-button">Learn More</button>
          <button className="watch-video-button" onClick={handleWatchVideo}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutGo;
