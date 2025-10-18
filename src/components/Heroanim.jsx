import React, { useEffect, useState } from "react";
// import "../styles.hero.css"
import "../styles/hero.css";


const slides = [
  {
    id: 1,
    className: "box box1",
    text: "clarity",
    image: "/SHAKE PUZZLE.png",
  },
  {
    id: 2,
    className: "box box2",
    text: "connection",
    image: "/HAND.png",
  },
  {
    id: 3,
    className: "box box3",
    text: "impact",
    image: "/ROCKET.png",
  },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${slide.className} ${index === current ? "active" : ""}`}
        >
          <div className="content">
            <h2 className="slide-text">{slide.text}</h2>
            <div className="image-wrapper">
              <img src={slide.image} alt={`slide-${slide.id}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
