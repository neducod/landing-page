import { useState } from "react"
import React from "react";
import "../styles/designprinciple.css";


const Designprinciples = () => {
    return (
      <section className="principles-container">
        <div className="principles-grid">
          <article className="principle-card principle-empathy">
            <div className="card-content">
              <h2 className="principle-title">Empathy first</h2>
              <p className="principle-description">
                I start by understanding users' real stories, needs, and frustrations.
              </p>
            </div>
            <div className="principle-icon">
              <svg className="folder-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="20" width="48" height="32" rx="4" fill="#1E40AF"/>
                <path d="M8 24C8 21.7909 9.79086 20 12 20H28L32 16H12C9.79086 16 8 17.7909 8 20V24Z" fill="#2563EB"/>
                <rect x="12" y="28" width="16" height="2" rx="1" fill="#60A5FA"/>
              </svg>
            </div>
          </article>
  
          <article className="principle-card principle-clarity">
            <div className="card-content">
              <h2 className="principle-title">Clarity over complexity</h2>
              <p className="principle-description">
                I simplify digital experiences so every action feels natural.
              </p>
            </div>
            <div className="principle-icon-small">
              <svg className="sparkle-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#6B7280"/>
              </svg>
            </div>
          </article>
  
          <article className="principle-card principle-collaboration">
            <h2 className="principle-title">Collaboration always</h2>
            <p className="principle-description">
              I work closely with developers, researchers, and stakeholders to bring ideas to life.
            </p>
          </article>
        </div>
      </section>
    );
  };
  
  export default Designprinciples;