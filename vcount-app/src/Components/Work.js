import React, { useRef, useEffect, useState } from "react";
import PeopleCounting from "../Assets/Retailstore.png";
import StaffExclusion from "../Assets/StaffExclusion.png";
import GroupCounting from "../Assets/Group-Counting.png";
import QueueManagement from "../Assets/QueueManagement.png";
import RealTimeOccupancy from "../Assets/RealTime.png";
import video from "../Assets/video.mp4";

const Work = () => {
  const workInfoData = [
    {
      image: PeopleCounting,
      title: "PeopleCounting",
      text: "Insights to increase your revenue in 60 days.",
    },
    {
      image: StaffExclusion,
      title: "Staff Exclusion",
      text: "Exclude your staff and achieve more accurate conversion rates.",
    },
    {
      image: GroupCounting,
      title: "GroupCounting",
      text: "Count groups as one to reach your pure conversion data.",
    },
    {
      image: QueueManagement,
      title: "Queue Management",
      text: "Monitor queue lengths, send alerts for additional checkouts.",
    },
    {
      image: RealTimeOccupancy,
      title: "Real-Time Occupancy",
      text: "Measure Occupancy. Optimize Operations. Lower Energy Costs.",
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
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
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
        <video ref={videoRef}  height="360" controls autoPlay muted={isMuted}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Work;