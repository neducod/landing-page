import React from "react";
import "../styles/empathy.css";


  const HeartsAnimation = () => {
    const heartImages = [
        "/Property 1=Emmiter 9.png",
        "/♥️.png",
        "/Property 1=Emmiter 9 (1).png",
        "/♥️.png",
        "/Property 1=Emmiter 7.png",
        "/♥️.png",
        "/♥️.png",
        "/♥️.png",
        "/Property 1=Emmiter 1.png",
        "/♥️.png",
    ];

  return (
    <div className="animation-container">
    <img src="/Property 1=Folder open.png" alt="folder" className="folder" />

    {heartImages.map((heart, i) => (
      <img
        key={i}
        src={heart}
        alt={`heart-${i}`}
        className="heart"
        style={{
          animationDelay: `${i * 0.4}s`,
          left: `${45 + Math.random() * 10}%`,
          "--drift": `${Math.random() * 60 - 30}px`,
        }}
      />
    ))}
  </div>


  );
};

export default HeartsAnimation;
