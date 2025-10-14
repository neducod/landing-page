import { useState } from "react"
import React from "react";
import "../styles/selectedwork.css";
// import { Link } from "react-router-dom";


// import { Link } from "react-router-dom";

const works = [
    {
      id: 1,
      img: "/opone.jpg",
      image: "/opone.jpg",
      subtitle: 'UX/UI DESIGN',
      title: 'Welkom-U Dashboard',
      description: 'Helping immigrants settle seamlessly, with the tools, guidance, and community they need',
    },
    {
      id: 2,
        image: "selecone.jpg",
      subtitle: 'UI/UX',
      title: 'Mobile App UI',
      description: 'Empowering your financial journey through smarter saving tools.',
    },
    {
      id: 3,
      image: "/optwo.jpg",
      subtitle: 'UI DESIGN',
      title: 'E-commerce Site',
      description: 'Leveraging artificial intelligence to transform how news is organised and understood.',
    },
    {
      id: 4,
      image: "/opfour.jpg",
      subtitle: 'UX/UI DESIGN',
      title: 'SavePlus Web/Mobile',
      description: 'Helping change makers raise funds, share stories, and inspire action.',
    },
    {
      id: 5,
      image: "/opthree.png",
      subtitle: 'UX/UI DESIGN',
      title: 'Farely Mobile App',
      description: 'Designing a seamless ride-hailing experience that simplifies fare comparison ',
    },
    {
      id: 6,
      image: "/opfive.jpg",
      subtitle: 'UX/UI DESIGN',
      title: 'CouponVouch',
      description: 'Making online shopping smarter, with verified deals you can actually trust.',
    },
  ];
  

const SelectedWork = () => {
  return (
    <section className="selected-work">
      <div className="selected-work-header">
        <h2>Selected Work</h2>
        <p>Proof of impact, stories behind the pixels.</p>
      </div>

      <div className="work-grid">
        {works.map((work) => (
          <div className="work-card" key={work.id}>
            <img src={work.image} alt={work.title} className="work-image" />
            <div className="work-content">
              <p className="work-subtitle">{work.subtitle}</p>
              <h3 className="work-title">{work.title}</h3>
              <p className="work-description">{work.description}</p>
             

  
              <button className="case-study-btn">
                Case study <span className="arrow">→</span>
              </button> 

              {/* <button className="case-study-btn">
                Case study <span className="arrow">→</span>
              </button> */}
           

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
