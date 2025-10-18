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

const slides = [
  {
    id: 1,
    direction: "down",
    content: (
      <div className="slide-content">
        <img src="/Property 1=Auto scroll 1.png" alt="photo" />
      </div>
    ),
  },
  {
    id: 2,
    direction: "up",
    content: (
      <div className="slide-content">
        <img src="/Property 1=Auto scroll 2.png" alt="photo" />
      </div>
    ),
  },
  {
    id: 3,
    direction: "down",
    content: (
      <div className="slide-content">
        <img src="/Property 1=Auto scroll 3.png" alt="photo" />
      </div>
    ),
  },
];

function AutoScrollAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return <div className="auto-scroll-container">{slides[index].content}</div>;
}

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
        I’m <span className="intro-name"> Segun</span>
      </h1>

      <p className="intro-subtitle">an Interaction Designer</p>
      <div className="intro-tagline">
        <p>I design for </p>
        <AutoScrollAnimation />
        {/* <video
          src="/videofile.mov"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        /> */}
      </div>

      {/* <AutoScrollAnimation /> */}

      <button className="contact-btn">Contact me</button>
    </section>
  );
};

export default Index;
