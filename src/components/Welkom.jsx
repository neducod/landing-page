import { useState } from "react"
import React from "react";
import "../styles/welkom.css"

const Welkom = () => {
    const WelkomUPage = () => {
        const steps = [
          {
            icon: <FaLightbulb />,
            title: "Synthesising the Problem",
            text: "I created empathy maps to synthesise user feedback and identify key needs, including access to accommodation, job opportunities, and a sense of community and belonging."
          },
          {
            icon: <FaComments />,
            title: "Talking to Users",
            text: "I interviewed 14 users who had recently migrated to Canada and other countries to understand their experiences, challenges, and key pain points during relocation."
          },
          {
            icon: <FaUsers />,
            title: "Analysing Discovery",
            text: "I reframed the problems into opportunities using the “How Might We” framework. This helped the team explore solutions more effectively and align around a shared understanding of the challenge."
          },
          {
            icon: <FaEye />,
            title: "Designing the Experience",
            text: "I mapped out user flows and journeys, then created quick sketches to test key interactions early. This allowed us to refine the user experience before progressing to high-fidelity interface designs for the web app."
          }
        ];
    return (
        <div className="page-container">
        {/* NAVBAR */}
        <header className="navbar">
          <div className="logo">SEGUN ARIBIDO</div>
          <nav>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About me</a></li>
              <li><button className="btn-primary">Let's Work</button></li>
            </ul>
          </nav>
        </header>
  
        {/* HERO IMAGE */}
        <section className="hero">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Welkom-U Dashboard"
          />
        </section>
  
        {/* PROJECT INFO */}
        <main className="content">
          <div className="left">
            <p className="category">UI/UX DESIGN</p>
            <h1>Welkom-U Dashboard</h1>
            <p className="subtitle">
              Helping immigrants settle seamlessly, with the tools, guidance, and community they need.
            </p>
            <a
              href="https://www.welkom-u.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              www.welkom-u.ca
            </a>
          </div>
  
          <div className="right">
            <h3>Context</h3>
            <p>
              Relocating to a new country can be overwhelming. As someone who relocated
              from Lagos, Nigeria to Kigali, Rwanda, I personally experienced the culture
              shock and the struggle of settling in. This inspired the creation of
              Welkom-U, a web-based PWA that supports people moving to Canada by giving
              them access to housing, social connections, cultural information, and
              other essential resources.
            </p>
  
            <h3>Introducing Welkom-U</h3>
            <p className="bold">Problem:</p>
            <p>
              When I moved from Lagos to Kigali in 2018, I found it difficult to access
              reliable, local information. Finding housing, understanding the job market,
              and adjusting to a new culture were major challenges during my first few
              months.
            </p>
  
            <p className="bold">What I did:</p>
            <p>
              I designed Welkom-U, a digital platform to help immigrants prepare for
              relocation and settle in more easily. I spoke to others with similar
              experiences to identify common pain points and prioritised features that
              addressed their real needs.
            </p>
  
            <p className="bold">Outcome:</p>
            <p>
              The tool provides verified housing listings, job opportunities, cultural
              tips, and ways to connect with local communities, all in one place. It’s
              designed from the perspective of someone who’s been through the process,
              with a focus on clarity, trust, and practical support.
            </p>
          </div>
        </main>
  
        {/* DESIGN PROCESS SECTION */}
        <section className="design-process">
          <div className="section-header">
            <h2>Design Process</h2>
            <p>~9 Weeks to Idea Validation</p>
          </div>
  
          <div className="cards">
            {steps.map((step, index) => (
              <div key={index} className="card">
                <div className="icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))};
          </div>
        </section>
      </div>
    );
  };}
  
  export default Welkom;
  