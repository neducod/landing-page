import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/designphiloso.css";

const DesignPhiloso = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    // use gsap.context to scope selectors to this component and allow cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });

      // animation: first icon appears, then second fades in, then third & fourth slide/overlap
      tl.fromTo(
        ".icon",
        { x: 0, opacity: 0 },
        {
          x: (i) => i * 36, // slight offset for overlapping effect
          opacity: 1,
          duration: 0.3,      // 300ms like Figma
          ease: "power1.inOut",
          stagger: {
            each: 0.8,        // 800ms delay between each icon's animation (matches Figma)
          },
        }
      )
        // hold state briefly so the icons are visible
        .to({}, { duration: 0.6 })
        // fade all icons out together and reset x back to 0
        .to(
          ".icon",
          {
            opacity: 0,
            x: 0,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "+=0"
        );
    }, rootRef);

    // cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section className="intro" id="home" ref={rootRef}>
      <div className="philosophy-wrapper">
        <h1 className="www">
          My Design{" "}
          <span className="icons-set">
            <img src="/My design Phy.png" className="icon" alt="icon1" />
            <img src="/Property 1=Interaction 1 2.png" className="icon" alt="icon2" />
            <img src="/Clarity 2.svg" className="icon" alt="icon3" />
            <img src="/Collaboration 2.svg" className="icon" alt="icon4" />
          </span>{" "}
          Philosophy
        </h1>
      </div>

      <p className="intro-p">
        I design with logic and empathy to create functional, human-centered products.
        Good design, to me feels effortless, scalable, and built on collaboration.
      </p>

      <div className="test">
        <div className="container"></div>
        <div className="container"></div>
      </div>
    </section>
  );
};

export default DesignPhiloso;
