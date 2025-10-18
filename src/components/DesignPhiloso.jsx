import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Empathy from "./Empathy.jsx";
import "../styles/designphiloso.css";

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
        <h1 className="www">
          My Design{" "}
          <span className="icons-set">
            <img src="/My design Phy.png" className="icon icon-pen" alt="pen" />
            <img src="/Property 1=Interaction 1 2.png" className="icon icon-heart" alt="heart" />
            <img src="/Clarity 2.svg" className="icon icon-bulb" alt="bulb" />
            <img src="/Collaboration 2.svg" className="icon icon-briefcase" alt="briefcase" />
          </span>{" "}
          <span className="philosophy-text">Philosophy</span>
        </h1>
      </div>

      <p className="intro-p">
        I design with logic and empathy to create functional, human-centered products.
        Good design, to me feels effortless, scalable, and built on collaboration.
      </p>

      <div>
      <Empathy />
      </div>


    </section>
  );
};

export default DesignPhiloso;
