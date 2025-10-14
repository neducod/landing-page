import { useState } from "react"
import React from "react";
import "../styles/opensource.css";



const contributions = [
    {
      img: "/Leather.png",
      title: "Leather pattern",
    },
    {
      img: "/Icons.png",
      title: "Illustrations",
    },
    {
      img: "/Frameone.png",
      title: "Card UI",
    },
    {
      img: "/dribbleone.png",
      title: "Pattern library",
    },
    {
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
  
