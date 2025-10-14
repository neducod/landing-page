import { useState } from "react"
import React from "react";
// import "../styles/opensource.css";
import "../styles/selectedwork.css";



const works = [
    {
      id: 1,
    //   image: '/images/imgg3.png',
      img: "/opone.jpg",
      image: "/opone.jpg",
      subtitle: 'Web Design',
      title: 'Portfolio Website',
      description: 'Helping immigrants settle seamlessly, with the tools, guidance, and community they need',
    },
    {
      id: 2,
    //   image: "/optwo.jpg",
        image: "selecone.jpg",
      subtitle: 'UI/UX',
      title: 'Mobile App UI',
      description: 'Empowering your financial journey through smarter saving tools.',
    },
    {
      id: 3,
    //   image: '/images/imgg5.png',
      image: "/optwo.jpg",
      subtitle: 'Development',
      title: 'E-commerce Site',
      description: 'Leveraging artificial intelligence to transform how news is organised and understood.',
    },
    {
      id: 4,
      image: "/opfour.jpg",
      subtitle: 'Landing Page',
      title: 'Marketing Page',
      description: 'Leveraging artificial intelligence to transform how news is organised and understood.',
    },
    {
      id: 5,
      image: "/opthree.png",
      subtitle: 'Dashboard',
      title: 'Analytics Dashboard',
      description: 'Empowering your financial journey through smarter saving tools.',
    },
    {
      id: 6,
      image: "/opfive.jpg",
      subtitle: 'Branding',
      title: 'Logo Design',
      title: 'Portfolio Website',
      description: 'Helping immigrants settle seamlessly, with the tools, guidance, and community they need',
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
