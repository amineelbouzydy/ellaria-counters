import React, { useRef, useEffect, useState } from "react";
import PeopleCounting from "../../Assets/AiPeopleCounting.png";
import DemographicAnalysis from "../../Assets/DemographicAnalysis.png";
import ZoneAnalytics from "../../Assets/ZoneAnalytics.png";
import AiQueueManagement from "../../Assets/AiQueueManagement.png";

import video from "../../Assets/video.mp4";

const AiWork = () => {
  const workInfoData = [
    {
      image: PeopleCounting,
      title: "PeopleCounting",
      text: "Utilisez les données de trafic des clients pour générer des ventes et améliorer les taux de conversion.",
    },
    {
      image: DemographicAnalysis,
      title: "Demographic Analysis",
      text: "Connaître l'âge et le sexe de vos clients pour offrir une expérience en fonction de leurs préférences.",
    },
    {
      image: ZoneAnalytics,
      title: "Zone Analytics",
      text: "L'analyse des zones en magasin vous permet de comprendre le flux de vos visiteurs.",
    },
    {
      image: AiQueueManagement,
      title: "Queue Management",
      text: "Une file d'attente et un temps d'attente plus courts améliorent l'expérience client.",
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
    <section id="aiwork" className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Solutions d'Ultima Ai</h1>
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
    </section>
  );
};

export default AiWork;