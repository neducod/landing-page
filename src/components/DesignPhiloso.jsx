import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Empathy from "./Empathy.jsx";
import ClarityAnimation from "./ClarityAnimation.jsx";
import "../styles/designphiloso.css";
import "../styles/AnimatedBox.css"
import AnimatedBox from "./AnimatedBox.jsx";

import MyLottie from "./MyLottie.jsx";


const DesignPhiloso = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      // Initial state: only pen visible
      gsap.set(".icon", { opacity: 0, x: 0 });
      gsap.set(".icon-pen", { opacity: 1 });
      gsap.set(".philosophy-text", { x: 0 });

      // Heart fades in, replacing pen
      tl.to(".icon-pen", { opacity: 0, duration: 0.4, ease: "power1.inOut" })
        .to(".icon-heart", { opacity: 1, duration: 0.4, ease: "power1.inOut" }, "<")

        // Heart slides left, text moves slowly right
        .to(".icon-heart", { x: -40, duration: 0.7, ease: "power1.inOut" })
        .to(".philosophy-text", { x: 40, duration: 0.7, ease: "power1.inOut" }, "<")

        // Bulb fades in slightly overlapping
        .to(".icon-bulb", { opacity: 1, x: -20, duration: 0.6, ease: "power1.inOut" })
        .to(".philosophy-text", { x: 60, duration: 0.6, ease: "power1.inOut" }, "<")

        // Briefcase appears next
        .to(".icon-briefcase", { opacity: 1, x: 0, duration: 0.6, ease: "power1.inOut" })
        .to(".philosophy-text", { x: 80, duration: 0.6, ease: "power1.inOut" }, "<")

        // Pause briefly
        .to({}, { duration: 0.5 })

        // Fade out all icons, text returns
        .to(".icon-heart, .icon-bulb, .icon-briefcase", {
          opacity: 0,
          duration: 0.6,
          ease: "power1.inOut",
        })
        .to(".philosophy-text", { x: 0, duration: 0.6, ease: "power1.inOut" }, "<")

        // Fade back to the first Pen icon smoothly
        .to(".icon-pen", { opacity: 1, duration: 0.3, ease: "power1.inOut" });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="intro" id="home" ref={rootRef}>
      <div className="philosophy-wrapper">
         <h1>My design</h1>
      <MyLottie width={400} height={400} />
      <h1>Philosophy</h1>
      </div>

      <p className="intro-pp">
        I design with logic and empathy to create functional, human-centered products.
        Good design, to me feels effortless, scalable, and built on collaboration.
      </p>
      <div className="bottom-part">
        <div>
        <Empathy />
        </div>
        <div>
          <img src="/design.gif" alt=""  className="hero-gif" />
        </div>
      </div>


    </section>
  );
};

export default DesignPhiloso;
