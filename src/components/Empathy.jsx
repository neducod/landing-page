import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/empathy.css";
// import folder from "../assets/folder.png";
// import heart1 from "../assets/heart1.png";
// import heart2 from "../assets/heart2.png";
// import heart3 from "../assets/heart3.png";

const EmpathySection = () => {
  useEffect(() => {
    const hearts = gsap.utils.toArray(".heart");

    hearts.forEach((heart, i) => {
      const delay = i * 0.8; // stagger
      const randomX = gsap.utils.random(-30, 30);
      const randomY = gsap.utils.random(80, 140);
      const duration = 1.5;

      gsap.to(heart, {
        delay: delay,
        y: -randomY,
        x: randomX,
        scale: 1,
        opacity: 1,
        duration: duration,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(heart, {
            opacity: 0,
            y: 0,
            x: 0,
            scale: 0,
            duration: 1,
            ease: "power1.in",
            delay: 0.3,
          });
        },
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: false,
      });
    });
  }, []);

  return (
    <div className="empathy-section">
      <h2>Empathy first</h2>
      <p>
        I start by understanding users’ real stories, needs,
        and frustrations.
      </p>

      <div className="folder-container">
        <img src="/Property 1=Folder open.png" alt="Folder" className="folder" />

        <img src="/Property 1=Emmiter 9.png" alt="Heart" className="heart h1" /> 
        <img src="/Property 1=Emmiter 9 (1).png" alt="" />
        <img src="/Property 1=Emmiter 7.png" alt="" />
        <img src="/Property 1=Emmiter 1.png" alt="" />
        <img src="/♥️.png" alt="" />
      </div>
    </div>
  );
};

export default EmpathySection;
