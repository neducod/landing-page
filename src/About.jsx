import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/about.css";

function About() {
  const images = [
    "/About me photos.png",
    "/Property 1=About me 3.png",
    "/Property 1=About me 2.png",
    "/Property 1=About me 4.png",
    "/Property 1=About me 5.png",
    "/Property 1=About me 6.png",
    "/Property 1=About me 7.png",
    "/Property 1=About me 8.png",
  ];

  return (
    <>
      {/* <Navbar /> */}
      <section className="frameaa">
        <div className="frame-a-one">
          <div className="frame-a-onee">
            <img src="" alt="about-images" className="intro-face" />
          </div>
          <div className="frame-a-c">
            <div className="header-cont">
              <div className="header-tex">
                <h2>Olusegun Aribido</h2>
              </div>
              <p>🗣️ You can call me Victor</p>
            </div>
            <button className="btn">Contact me</button>
          </div>
        </div>

        <div className="frame-aa-one">
          <h2>About me</h2>
          <div className="card">
            <p>
              I didn’t start my career pushing pixels, I started by cutting fabric.  Before
              becoming a product designer, I was immersed in the world of fashion design,
              sketching patterns, tailoring details, and learning how every stitch could change
              how someone felt. That experience taught me something I’ve carried into every
              digital product I design today, design is about how it feels, not just how it looks.
            </p>
            <p>
              Over the years, I’ve traded fabric for Figma, but my obsession with crafting
              human-centered experiences hasn’t changed. I’ve designed for industries as varied
              as agriculture, fintech, eCommerce, edtech, entertainment, blockchain, and AI,
              building mobile apps, web platforms, and even USSD tools that make technology feel
              more human and accessible across East and West Africa and beyond.
            </p>
            <p>
              When I’m not refining user flows or prototyping new ideas, you’ll probably find me
              doodling or sketching isometric worlds, translating abstract thoughts into playful
              visuals. Away from the screen, I’m a bit of a strategist,
            </p>
            <p>
              I love <a href="https://www.chess.com/member/aribido01">chess</a>, scrabble,
              monopoly, connect four, and a good badminton match. These games keep my mind sharp,
              teaching me patience, timing, and the joy of seeing possibilities unfold, lessons
              that constantly echo in my design work.
            </p>
            <p>
              At home, I share my love for creativity with my daughter, often building imaginary
              cities out of LEGO bricks. And when I’m not building something with my hands, I’m
              out on the football pitch, enjoying the same mix of strategy, rhythm, and teamwork
              that drives great design.
            </p>
            <p>
              If there’s one thing that defines me, it’s curiosity. I love exploring how things
              work, and how they could work better. Whether I’m leading a design sprint,
              collaborating with engineers, or testing ideas with real users, I aim to create
              products that don’t just meet needs, they make people feel seen, understood, and
              empowered.
            </p>
            <p>Let’s build something meaningful, something that tells a story worth experiencing</p>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default About;