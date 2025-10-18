import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import Heroanim from "./Heroanim";

const Hero = () => {
  const images = [
    "/ProfileImages.png",
    "/Property 1=Pro 2.png",
    "/Property 1=Pro 3.png",
    "/Property 1=Pro 4.png",
    "/Property 1=Pro 5.png",
    "/Property 1=Pro 6.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1800); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="intro" id="home">
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

      <div className="intro-tagline">
        <p>I design for </p>
        <Heroanim />
      </div>

      <button className="contact-btn">Contact me</button>
    </section>
  );
};

export default Hero;
