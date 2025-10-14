import { useState } from "react"
import React from "react";
import "../styles/design.css";

const DesignPhil = () => {
  return (
    <main className="philosophy-container">
      <article className="philosophy-card">
        <header className="philosophy-header">
          <h1 className="philosophy-title">
            My Design <span className="emoji">🎨</span> Philosophy
          </h1>
        </header>
        
        <section className="philosophy-content">
          <p className="philosophy-text">
            I design with logic and empathy to create functional,
            human-centered products. Good design, to me, feels effortless,
            scalable, and built on collaboration.
          </p>
        </section>
      </article>
    </main>
  );
};
export default DesignPhil;