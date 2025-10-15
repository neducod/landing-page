// import { useState } from "react"
import React, { useEffect, useState } from "react";
// import React from "react";

import "../styles/designphiloso.css";

// const ICONS = {
//   pen: "/icons/pen.png",
//   heart1: "/icons/heart1.png",
//   heart2: "/icons/heart2.png",
//   bulb: "/icons/lightbulb.png",
//   briefcase: "/icons/briefcase.png",
// };

// const steps = [
//   /* 0 */ { main: "pen", showBulb: false, showCase: false, duration: 1200 },
//   /* 1 */ { main: "heart1", showBulb: false, showCase: false, duration: 1200 },
//   /* 2 */ { main: "heart2", showBulb: false, showCase: false, duration: 1200 },
//   /* 3 */ { main: "heart2", showBulb: true, showCase: false, duration: 1500 },
//   /* 4 */ { main: "heart2", showBulb: true, showCase: true, duration: 1400 },
//   /* 5 */ { main: "heart2", showBulb: true, showCase: false, duration: 1500 }, // briefcase fades out
// ];

// function IconSequence() {
//   const [stepIndex, setStepIndex] = useState(0);

//   useEffect(() => {
//     let mounted = true;
//     const runStep = () => {
//       const { duration } = steps[stepIndex];
//       const t = setTimeout(() => {
//         if (!mounted) return;
//         setStepIndex((s) => (s + 1) % steps.length);
//       }, duration);
//       return () => clearTimeout(t);
//     };

//     const cleanup = runStep();
//     return () => {
//       mounted = false;
//       if (cleanup) cleanup();
//     };
//   }, [stepIndex]);

//   const { main, showBulb, showCase } = steps[stepIndex];
// }
const DesignPhiloso = () => {
    return(
      <section className="intro">
        <div className="qqq">
        <h2 className="www">My Design</h2>
        <div className="container">
                          <video
  src="/ogtjer.mov"
  autoPlay
  loop
  muted
  playsInline
  className="hero-video"
/>
        </div>
        </div>

      <div className="test">
        <div className="container" >
        <video
  src="/avdvd.mov"
  autoPlay
  loop
  muted
  playsInline
  className="hero-video"
/>
        </div>
        <div className="container">
        <video
  src="/jjhn.mov"
  autoPlay
  loop
  muted
  playsInline
  className="hero-video"
/>
        </div>
      </div>
    </section>
    );
};
  export default DesignPhiloso;