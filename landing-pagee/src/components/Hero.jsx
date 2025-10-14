import { useState } from "react"
import React from "react";
import "../styles/hero.css";


const Index = () => {
  return (
    <main className="main">
      <div className="container">
        {/* Profile Image */}
        <div className="profile-image-wrapper">
            {/* <img src="/ProfileImages.png" alt="" /> */}
        </div>

        {/* Greeting */}
        <h1 className="greeting">Hi,   <img src="/ProfileImages.png" alt="" />         I'm Segun</h1>

        {/* Subtitle */}
        <p className="subtitle">an Interaction Designer</p>

        {/* Main Statement */}
        <div className="main-statement">
          <p>
            I design for <span>clarity</span>
          </p>
          <div className="icon">🌍</div>
        </div>

        {/* CTA Button */}
        <div className="cta-button-wrapper">
             <button className="cta-button">Contact me</button>
        </div>
      </div>
    </main>
  );
};

export default Index;
