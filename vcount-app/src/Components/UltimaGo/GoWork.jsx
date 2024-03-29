import React, { useRef, useEffect, useState } from "react";
import PeopleCounting from "../../Assets/Retailstore.png";
import StaffExclusion from "../../Assets/StaffExclusion.png";
import GroupCounting from "../../Assets/Group-Counting.png";
import QueueManagement from "../../Assets/QueueManagement.png";
import DemographicAnalysis from "../../Assets/DemographicAnalysis2.png";
import RealTimeOccupancy from "../../Assets/RealTime.png";
import video from "../../Assets/video.mp4";

const GoWork = () => {
  const workInfoData = [
    {
      image: PeopleCounting,
      title: "Compteur de personnes",
      text: "Utilisez les données de trafic des clients pour générer des ventes et améliorer les taux de conversion.",
    },
    {
      image: DemographicAnalysis,
      title: "Analyse démographique",
      text: "Connaître l'âge et le sexe de vos clients pour offrir une expérience en fonction de leurs préférences.",
    },
    {
      image: StaffExclusion,
      title: "Exclusion du personnel",
      text: "Excluez votre personnel et obtenez des taux de conversion plus précis.",
    },
    {
      image: GroupCounting,
      title: "Comptage de groupe",
      text: "Comptez les groupes comme un seul personne pour atteindre vos données de conversion pures.",
    },
    {
      image: QueueManagement,
      title: "Gestion des files d'attente",
      text: "Surveillez la longueur des files d'attente, envoyez des alertes pour des paiements supplémentaires.",
    },
    {
      image: RealTimeOccupancy,
      title: "Occupation en temps réel",
      text: "Mesurer l'occupation. Optimiser les opérations. Coûts énergétiques réduits.",
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
    <section id="gowork" className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Solutions d'Ultima Go</h1>
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