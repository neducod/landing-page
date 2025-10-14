import { useState } from "react"
import React from "react";

import "../styles/designphiloso.css";


const DesignPhiloso = () => {
    return (
      <div className="design-philosophy">
        <header className="philosophy-header">
          <h1 className="philosophy-title">
            My Design 
            <span className="icon-badge">✏️</span> 
            Philosophy
          </h1>
          <p className="philosophy-description">
            I design with logic and empathy to create functional, 
            human-centered products. Good design, to me, feels effortless, 
            scalable, and built on collaboration.
          </p>
        </header>
  
        <div className="principles-grid">
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
        </div>
      </div>
    );
  };
  
  
  export default DesignPhiloso;