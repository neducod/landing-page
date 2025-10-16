import React from "react";
import "./styles/projectfive.css";

const Project5 = () => {
  return (
    <section className="project-page">
      <div className="hero-img">
        <img src="/Frame 3232999 4.png" alt="" /> 
      </div>
      <div className="f-one">
        <div className="f-one-a">
          <div className="f-one-head">
            <p>UX/UI DESIGN</p>
            <h2>Farely</h2>
          </div>
          <p>Designing a seamless ride-hailing experience that simplifies fare comparison </p>
        </div>
        <div className="f-one-b">
          <h3>Project Overview</h3>
          <p>Farely is a ride-hailing mobile app designed to make city transportation simpler, faster, and more delightful. Inspired by Duolingo’s playful design language, Farely focuses on friendly onboarding, engaging micro-interactions, and trust-building visual communication to redefine how people book rides in emerging markets.</p>
          <p>My goal as the Product Designer was to craft a fun, intuitive, and emotionally engaging experience that reduces cognitive load and increases user confidence, especially for first-time riders in digital mobility apps.</p>
        </div>
      </div>

      <div className="f-two">
        <div className="f-two-a">
          <div className="f-two-head">
            <h2>Problem </h2>
          </div>
          <p>In many cities, ride-hailing experiences can feel transactional and confusing.</p>
        </div>
        <div className="f-two-b">
          <div className="f-two-bhead">
            <h3>Users often face challenges such as:</h3>
            <p>Complicated sign-up or verification processes </p>
            <p>Poor feedback loops during ride booking or payment</p>
            <p>A lack of emotional engagement or trust-building in the interface</p>
            <p>Farely set out to solve this by creating a lightweight, human-centered alternative that’s both functional and emotionally rewarding.</p>
          </div>
        </div>
      </div>

      <div className="f-three">
        <div className="f-three-a">
          <div className="three-f-head">
            <h2>Research</h2>
          </div>
          <p>I conducted comparative UX research on platforms like Bolt, Uber, and inDriver to understand what frustrates or delights users.</p>
        </div>
        <div className="f-three-b">
          <div className="f-three-bb">
            <h2>Key insights included:</h2>
            <p>Users want quick access to booking without lengthy registration.</p>
            <p>Animated feedback (like confirmations, progress bars, or icons) helps build confidence.</p>
            <p>A friendly tone and playful visuals increase trust and memorability.</p>
          </div>
        </div>
      </div>

      <div className="f-four">
        <div className="f-foura">
          <h2>User Personas</h2>
        </div>
        <div className="f-fourb">
          <div className="f-fourb-one">
            <div className="extra">
              <h2>Based on research, two key personas were developed:</h2>
              <p>Through this research, I identified three primary user groups commonly involved in the fundraising journey:</p>
            </div>
          </div>
          <div className="f-fourb-two">
            <div className="f-fourb-two-a" >
              <img src="/Avatars 2.png" alt="" />
              <p><span>The Everyday Commuter – </span>values speed, convenience, and reliability.</p>
            </div>
            <div className="f-fourb-two-b">
              <img src="/Avatars (1) 2.png" alt="" />
              <p><span>The First-Time User –</span> needs reassurance, clear instructions, and positive reinforcement.</p>
            </div>
          </div>
        </div>


  
      </div>


      {/* <div> */}


      {/* </div> */}









      <div className="ips">
        <img src="/iPhone 12 Pro.png" alt="" />
        <img src="/iPhone 12 Pro (4).png" alt="" />
        <img src="/iPhone 12 Pro 2.png" alt="" />
        <img src="/iPhone 12 Pro (1).png" alt="" />
      </div>



      <div className="whole">
      <div className="f-five">
        <div className="f-five-a">
          <h2>Outcome</h2>
          <ul>
            <li><span>Faster booking time:</span> reduced from 5 screens to 3 steps.</li>
            <li><span>Increased engagement:</span> testers revisited the prototype 2–3 times more than competitors.</li>
            <li><span>Positive emotional feedback: </span>playful tone and visuals created an inviting experience.</li>
          </ul>
          <p>Farely demonstrates how human-centered design, motion, and simplicity can transform everyday mobility apps into experiences that people actually enjoy using.</p>
        </div>
      </div>

      <div className="f-six">
        <div className="f-six-a">
          <h2>Reflection</h2>
          <p>Designing Farely taught me the power of emotion-driven interaction in functional products. A ride-hailing app doesn’t just need to be efficient, it should make users feel in control, safe, and delighted. By blending usability with personality, Farely reimagines what digital mobility can feel like.</p>
        </div>
      </div>
      </div>


    </section>
  );
};

export default Project5;
