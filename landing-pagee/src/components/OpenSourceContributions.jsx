import { useState } from "react"
import React from "react";
import "../styles/opensource.css";



const contributions = [
    {
      // img: "https://via.placeholder.com/150/91b29d/ffffff?text=Leather+pattern",
      img: "/Leather.png",
      title: "Leather pattern",
    },
    {
      // img: "https://via.placeholder.com/150/ffffff/000000?text=Illustrations",
      // img: "/opone.jpg",
      img: "/Icons.png",
      title: "Illustrations",
    },
    {
      // img: "https://via.placeholder.com/150/8ac7ff/ffffff?text=Card+UI",
      img: "/Frameone.png",
      title: "Card UI",
    },
    {
      // img: "https://via.placeholder.com/150/ffd54f/000000?text=Pattern+library",
      img: "/dribbleone.png",
      title: "Pattern library",
    },
    {
      // img: "https://via.placeholder.com/150/dde3e9/000000?text=Mockup",
      img: "/Frametwo.png",
      title: "Mockup",
    },
  ];

  

  export default function OpenSourceContributions() {
    return (
      <section className="open-source">
        <h2>Open Source Contributions</h2>
        <p className="text-p">Giving back through community-driven design</p>
  
        <div className="card-grid">
          {contributions.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.title} />
              <a href="#">{item.title}</a>
            </div>
          ))}
        </div>
  
        <button className="view-more">
          View more <span>→</span>
        </button>
      </section>
    );
  }
  
