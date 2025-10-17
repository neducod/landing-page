import { useState } from "react"
import React from "react";
import "../styles/footer.css";

const Footer = () => {
  
    return (
      <footer>
        <div className="footer-a">
          <div className="footer-aa">
            <h2>Let’s <br />  work together</h2>
            <div className="footer-in-content">
              <img src="/arrow-icon.png" alt="" />
              <a href="mailto:aribidoolusegun@gmail.com"  >aribidoolusegun@gmail.com</a>
            </div>
          </div>
          <p>Do you have an interesting project? I’ll love to hear from you. Reach out and let’s create something amazing together.</p>
        </div>
        <div className="footer-b">
          <p>Copyright @ 2025 Olusegun Aribido</p>
          <div className="footer-iconn">
            <a href="https://www.linkedin.com/in/olusegun-aribido/">LinkedIn</a>
            <a href="https://x.com/kadunaconnect">Twitter</a>
            <a href="https://medium.com/@olusegunaribido">Medium</a>
            <a href="https://dribbble.com/segunaribido">Dribbble</a>
          </div>
        </div>
      </footer>

      //   <footer className="footer" id="home">
      //             <div className="footer-left">
      //   <h1 className="footer-title">
      //     Let’s <br /> work <br /> together
      //   </h1>
      //   <div className="footer-contact">
      //     <span className="arrow">→</span>
      //     <a
      //       href="mailto:aribidoolusegun@gmail.com"
      //       className="email-link"
      //     >
      //       aribidoolusegun@gmail.com
      //     </a>
      //   </div>
      // </div>

      // <div className="footer-right">
      //   <p>
      //     Do you have an interesting project? I’ll love to hear from you. Reach out and let’s
      //     create something amazing together.
      //   </p>
      // </div>

      // <div className="footer-bottom">
      //   <p>Copyright © 2025 Olusegun Aribido</p>
      //   <div className="social-links">
      //     <a href="#">LinkedIn</a>
      //     <a href="#">Twitter</a>
      //     <a href="#">Medium</a>
      //     <a href="#">Dribbble</a>
      //   </div>
      // </div>


      // </footer>
    );
  };
  
  export default Footer;
  