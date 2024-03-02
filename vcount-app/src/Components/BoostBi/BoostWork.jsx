import React, { useRef, useEffect, useState } from "react";
import CustomizedKPI from "../../Assets/CustomizedKPI.png";
import LocationAnalysis from "../../Assets/LocationAnalysis.png";
import StoreOptimizer from "../../Assets/StoreOptimizer.png";
import MarketingCampaignAnalysis from "../../Assets/MarketingCampaignAnalysis.png";

import video from "../../Assets/video.mp4";

const BoostWork = () => {
  const workInfoData = [
    {
      image: CustomizedKPI,
      title: "CUSTOMIZED KPIs",
      text: "Choisissez parmi plus de 200 KPI pour obtenir un aperçu complet des performances de votre entreprise avec des mesures précieuses.",
    },
    {
      image: LocationAnalysis,
      title: "LOCATION ANALYSIS",
      text: "Mesurez les performances de différents emplacements grâce à des informations sur toutes les analyses.",
    },
    {
      image: StoreOptimizer,
      title: "OPTIMISEUR DE MAGASIN",
      text: "Planifier le nombre de personnel pour garantir la satisfaction des clients et éviter les pertes de ventes.",
    },
    {
      image: MarketingCampaignAnalysis,
      title: "ANALYSE DE CAMPAGNE MARKETING",
      text: "Évaluez l'efficacité de vos campagnes marketing et suivez le trafic vers votre magasin, y compris celui généré par les annonces sur Google, Meta et TikTok.",
    }
  ];

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Initially muted

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;

      if (video) {
        const { top, bottom } = video.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // If the top of the video is within the viewport
        // or if the bottom of the video is partially within the viewport
        if ((top >= 0 && top <= windowHeight) || (bottom >= 0 && bottom <= windowHeight)) {
          // Unmute the video
          setIsMuted(false);
        } else {
          // Mute the video
          setIsMuted(true);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">BoostBI Solutions</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" className="infoimg"/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className="video-container">
        <video ref={videoRef}  height="360" controls muted={isMuted}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default BoostWork;