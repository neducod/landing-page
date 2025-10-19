import React from "react";
import "../styles/empathy.css";

const HeartsAnimation = () => {
  const heartImages = [
    "/♥️.png",
    "/♥️.png",
    "/♥️.png",
    "/Property 1=Emmiter 9.png",
    "/Property 1=Emmiter 9 (1).png",
    "/Property 1=Emmiter 7.png",
    "/Property 1=Emmiter 1.png",
    "/Property 1=Emmiter 9 (1).png",
  ];

  return (
    <div className="main-container">

      <div className="text-section">
        <h2 className="animation-title">Empathy first</h2>
        <p className="animation-subtitle">
        I start by understanding 
users’ real stories, needs, 
and frustrations.
        </p>
      </div>


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
              "--drift": `${Math.random() * 60 - 30}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeartsAnimation;
