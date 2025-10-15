// import { useState } from "react"
import React, { useEffect, useState } from "react";
// import React from "react";

import "../styles/designphiloso.css";


const DesignPhiloso = () => {


  const icons = [
    { bg: "#FEE440", icon: "💡" },
    { bg: "#00BBF9", icon: "⚙️" },
    { bg: "#9B5DE5", icon: "🎨" },
    { bg: "#00F5D4", icon: "🚀" },
    { bg: "#FEE440", icon: "💡" },
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);






  // const [hearts, setHearts] = useState([]);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newHeart = {
  //       id: Date.now(),
  //       left: Math.random() * 60 - 30, 
  //       size: Math.random() * 14 + 16, 
  //       duration: Math.random() * 1 + 2, 
  //     };
  //     setHearts((prev) => [...prev, newHeart]);
  //     setTimeout(() => {
  //       setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
  //     }, newHeart.duration * 1000);
  //   }, 600);

  //   return () => clearInterval(interval);
  // }, []);






  const [showExtra, setShowExtra] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowExtra((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 7000); // every 7s switch between cards

    return () => clearInterval(interval);
  }, []);








  //SECOND HEART ANIMATION

const FolderAnimation = () => {
  // Placeholder SVG for folder (you'll replace with your actual images)
  const FolderSVG = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8L3 18C3 19.1046 3.89543 20 5 20L19 20C20.1046 20 21 19.1046 21 18V8M3 8V6C3 4.89543 3.89543 4 5 4H9L11 6H19C20.1046 6 21 6.89543 21 8M3 8L21 8" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="hsl(var(--primary) / 0.2)"/>
    </svg>
  );

  // Placeholder SVG for heart (you'll replace with your actual images)
  const HeartSVG = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
            fill="hsl(var(--accent))"
            stroke="hsl(var(--accent))" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
    </svg>
  );

    return (
      <div className="design-philosophy">
        <header className="philosophy-header">
          <h1 className="philosophy-title">
              My Design 
              <video
  src="/videotwofile.mov"
  autoPlay
  loop
  muted
  playsInline
  className="#"
/>
          </h1>
          {/* <h1 className="philosophy-title">
            My Design 
            <span className="icon-span">
          {step === 0 && (
            <div
              className="icon-box fade"
              style={{ background: icons[0].bg }}
            >
              {icons[0].icon}
            </div>
          )}

          {step === 1 && (
            <div
              className="icon-box fade"
              style={{ background: icons[1].bg }}
            >
              {icons[1].icon}
            </div>
          )}

          {step === 2 && (
             <div className="multi-icon">
    {icons.slice(1, 4).map((item, i) => (
      <div
        key={i}
        className="icon-box fade overlap"
        style={{
          background: item.bg,
          zIndex: 3 - i,
          marginLeft: `${i * 12}px` // small spacing between icons
        }}
      >
        {item.icon}
      </div>
    ))}
  </div>
          )}
        </span>
            Philosophy
          </h1> */}
          <p className="philosophy-description">
            I design with logic and empathy to create functional, 
            human-centered products. Good design, to me, feels effortless, 
            scalable, and built on collaboration.
          </p>
        </header>


        <div className="principles-grid">
  {/* Left column */}
  <div className="left-column">
    {/* <article className="principle-cardd card-blue">
      <h2 className="principle-title">Empathy first</h2>
      <p className="principle-text">
        I start by understanding users' real stories, needs, 
        and frustrations.
      </p>
      <div className="principle-icon">
        <div className="folder-icon">
          <div className="folder-tab"></div>
          <div className="folder-body"></div>
        </div>
      </div>
    </article> */}


    {/* <article className="principle-cardd card-blue">
      <h2 className="principle-title">Empathy first</h2>
      <p className="principle-text">
        I start by understanding users' real stories, needs, and frustrations.
      </p>

      <div className="principle-icon">
        <div className="folder-icon">
          <div className="folder-tab"></div>
          <div className="folder-body"></div>
        </div>

        <div className="heart-container">
          {hearts.map((heart) => (
            <span
              key={heart.id}
              className="heart"
              style={{
                left: `${heart.left}px`,
                width: `${heart.size}px`,
                height: `${heart.size}px`,
                animationDuration: `${heart.duration}s`,
              }}
            >
              💙
            </span>
          ))}
        </div>
      </div>
    </article> */}

{/* SECONDD HEARTS */}
    <div className="folder-container">
      <div className="folder">
        <div className="folder-image">
          <FolderSVG />
        </div>
      </div>
      
      {/* Multiple hearts with different animations */}
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num} className={`heart heart-${num}`}>
          <div className="heart-image">
            <HeartSVG />
          </div>
        </div>
      ))}
    </div>









  </div>

  {/* Right column */}
  <div className="right-column">
    <article className="principle-card card-pink">
      <h2 className="principle-title">Clarity over complexity</h2>
      <p className="principle-text">
        I simplify digital experiences so every action feels natural.
      </p>
      {/* <div className="principle-icon">
        <div className="smile-icon">🙂</div>
      </div> */}
      <div className="principle-bottom">
        <div className={`extra-content ${showExtra ? "visible" : "hidden"}`}>
          <div className="icon-row">
            <span>🌿</span>
            <span>💡</span>
            <span>✨</span>
          </div>
          <p className="extra-text">Design flows from simplicity</p>
        </div>
      </div>
    </article>

    <article className="principle-card card-green">
      <h2 className="principle-title">Collaboration always</h2>
      <p className="principle-text">
        I work closely with developers, researchers, and stakeholders 
        to bring ideas to life.
      </p>
      <div  className={`principle-card card-green ${!showFirst ? "visible" : "hidden"}`}>
      <div className="principle-bottomm">
          <div className="extra-content">
            <div className="briefcase-icon">💼</div>
            <div className="message-row">
              <span>💬</span>
              <span>💬</span>
              <span>💬</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</div>

  
     {/*    <div className="principles-grid">
            <div>
            <article className="principle-cardd card-bluue">
            <h2 className="principle-title">Empathy first</h2>
            <p className="principle-text">
              I start by understanding users' real stories, needs, 
              and frustrations.
            </p>
            <div className="principle-icon">
              <div className="folder-icon">
                <div className="folder-tab"></div>
                <div className="folder-body"></div>
              </div>
            </div>
          </article>
            </div>

            <div>
            <article className="principle-card card-pink">
            <h2 className="principle-title">Clarity over complexity</h2>
            <p className="principle-text">
              I simplify digital experiences so every action feels natural.
            </p>
            <div className="principle-icon">
              <div className="smile-icon">🙂</div>
            </div>
          </article>
  
          <article className="principle-card card-green">
            <h2 className="principle-title">Collaboration always</h2>
            <p className="principle-text">
              I work closely with developers, researchers, and stakeholders 
              to bring ideas to life.
            </p>
          </article>
            </div>
        </div> */}
      </div>
    );
  };
}
  
  export default DesignPhiloso;