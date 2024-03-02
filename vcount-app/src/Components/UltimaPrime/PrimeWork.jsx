import React, { useRef, useEffect, useState } from "react";
import Heatmap from "../../Assets/PrimeHeatMap.png";
import ZoneAnalytics from "../../Assets/PrimeZoneAnalytics.png";
import VisitorCount from "../../Assets/PrimeVisitorCount.png";
import DwellTime from "../../Assets/PrimeDwellTime.png";
import VisitorFlow from "../../Assets/PrimeVisitorFlow.png";
import video from "../../Assets/video.mp4";

const GoWork = () => {
  const workInfoData = [
    {
      image: Heatmap,
      title: "Carte thermique",
      text: "La carte thermique d'Ultima Prime montre où les clients passent le plus de temps dans votre magasin.",
    },
    {
      image: ZoneAnalytics,
      title: "Analyse de zones",
      text: "L'analyse de zones améliore les activités marketing, les opérations en magasin et l'expérience client.",
    },
    {
      image: VisitorCount,
      title: "Zone Analytics Visitor Count",
      text: "Ultima Prime compte et analyse le trafic dans chaque rayon du magasin.",
    },
    {
      image: DwellTime,
      title: "Temps d'arrêt",
      text: "Comptez les groupes comme un seul personne pour atteindre vos données de conversion pures.",
    },
    {
      image: VisitorFlow,
      title: "Flux de visiteurs",
      text: "Découvrez les chemins les plus et les moins populaires dans votre magasin.",
    },
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
    <section id="primework" className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Solutions d'Ultima Prime</h1>
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

export default GoWork;