// import { useState } from "react"
// import React from "react";
import React, { useEffect, useState } from "react";
import "../styles/hero.css";

const images = [
  "/ProfileImages.png",
  "/Property 1=Pro 2.png",
  "/Property 1=Pro 3.png",
  "/Property 1=Pro 4.png",
  "/Property 1=Pro 5.png",
  "/Property 1=Pro 6.png",
];



const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);


  return (
  //   <section className="intro">
  //   <div className="intro-content">
  //     <h1 className="intro-heading">
  //       Hi,{" "}
  //       <span className="intro-name">
  //         <img src="/ProfileImages.png" alt=""  className="intro-avatar"  />
  //         I’m Segun
  //       </span>
  //     </h1>
  //     <p className="intro-subtitle">an Interaction Designer</p>
  //     <p className="intro-tagline">
  //       I design for <span className="highlight">clarity</span>
  //       <img src="/SHAKEPUZZLE.png" alt="" className="intro-icon"/>
  //     </p>
  //     <button className="contact-btn">Contact me</button>
  //   </div>
  // </section>
  <section className="intro">
  <h1 className="intro-title">
    Hi,{" "}
    <div className="intro-face-wrapper">
      <img
        src={images[currentImage]}
        alt="Changing faces"
        className="intro-face"
      />
    </div>{" "}
    I’m <span className="intro-name">Segun</span>
  </h1>

  <p className="intro-subtitle">an Interaction Designer</p>

  {/* <p className="intro-tagline">
    I design for <em>clarity</em>{" "}
    <img src="/SHAKEPUZZLE.png" alt="clarity icon" className="clarity-icon" />
  </p> */}
  <div className="intro-tagline">
   <p> I design for </p>
   <video
  src="/videofile.mov"
  autoPlay
  loop
  muted
  playsInline
  className="hero-video"
/>
  </div>

  <button className="contact-btn">Contact me</button>
</section>
  );
};

export default Index;
