import { useState } from "react"
import React from "react";
import "../styles/hero.css";


const Index = () => {
  return (
    <section className="intro">
    <div className="intro-content">
      <h1 className="intro-heading">
        Hi,{" "}
        <span className="intro-name">
          <img src="/ProfileImages.png" alt=""  className="intro-avatar"  />
          {/* <img src={profilePic} alt="Profile" className="intro-avatar" /> */}
          I’m Segun
        </span>
      </h1>
      <p className="intro-subtitle">an Interaction Designer</p>
      <p className="intro-tagline">
        I design for <span className="highlight">clarity</span>
        <img src="/SHAKEPUZZLE.png" alt="" className="intro-icon"/>
        {/* <img src={clarityIcon} alt="icon" className="intro-icon" /> */}
      </p>
      <button className="contact-btn">Contact me</button>
    </div>
  </section>
  );
};

export default Index;
