import React, { useEffect, useState } from "react";
// import "./ClarityAnimation.css";
import "../styles/clarity.css";


const ClarityAnimation = () => {
    const [fadeOut, setFadeOut] = useState(false);
  
    useEffect(() => {
      // fade out + shrink after 7s
      const timer = setTimeout(() => setFadeOut(true), 7000);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className={`clarity-container ${fadeOut ? "shrink" : ""}`}>
        <div className="clarity-text">
          <h2>Clarity</h2>
          <p>Your message or tagline goes here.</p>
        </div>
  
        {!fadeOut && (
          <div className="clarity-animation">

          <img src="/Property 1=Clarity 1.png" alt="img1" className="img img1" />
          <img src="/Add 1.svg" alt="img2" className="img img2" />
          <img src="/Clearity.svg" alt="img3" className="img img3" />
          <img src="/Add 1.svg" alt="img2" className="img img2" />
          <img src="/Clearity (1).svg" alt="img5" className="img img5" />
          <img src="/Equal.svg" alt="img6" className="img img6" />
          <img src="/Clearity (2).svg" alt="img7" className="img img7" />
           
          </div>
        )}
      </div>
    );
  };
  
  export default ClarityAnimation;
  




