import React, { useEffect, useState } from "react";
// import "..styles/AnimatedBox.css";
import "../styles/AnimatedBox.css"


const AnimatedBox = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    // trigger animation once when component mounts
    const timer = setTimeout(() => setPlay(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`animated-box ${play ? "play" : ""}`}>
      <div className="text-box">Let’s Work Together</div>

      <div className="animation-area">
        <div className="icons-top">
          <div className="icon icon1">💼</div>
          <div className="icon icon2">💬</div>
          <div className="icon icon3">📩</div>
        </div>

        <div className="icons-bottom">
          <div className="icon icon4">💛</div>
          <div className="icon icon5">🧡</div>
          <div className="icon icon6">❤️</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBox;
