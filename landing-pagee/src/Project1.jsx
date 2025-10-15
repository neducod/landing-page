import React from "react";
import "./styles/projectone.css";

const designprocess = [
  {
    id: 1,
    image: "/Union.png",
    tittle: 'Synthesising the Problem',
    description: 'I created empathy maps to synthesise user feedback and identify key needs, including access to accommodation, job opportunities, and a sense of community and belonging.',
  },
  {
    id: 2,
    image: "/Union (1).png",
    tittle: 'Talking to Users',
    description: 'I interviewed 14 users who had recently migrated to Canada and other countries to understand their experiences, challenges, and key pain points during relocation.',
  },
  {
    id: 3,
    image: "/binoculars_duetone.png",
    tittle: 'Analysing Discovery',
    description: 'I reframed the problems into opportunities using the “How Might We” framework. This helped the team explore solutions more effectively and align around a shared understanding of the challenge.',
  },
  {
    id: 4,
    image: "/Union (2).png",
    tittle: 'Designing the Experience',
    description: 'I mapped out user flows and journeys, then created quick sketches to test key interactions early. This allowed us to refine the user experience before progressing to high-fidelity interface designs for the web app.',
  },
]

const Project1 = () => {
  return (
    <section className="project-page">
      <div className="hero-image-parent">
        <img src="/Frame 3232999.png" alt="hero-icon" className="hero-image" />
      </div>
      <div className="frame-1-wrapper"> 
        <div className="frame-1">
          <h2>UX/UI DESIGN</h2>
          <h1>Welkom-U Dashboard</h1>
          <p className="frame-1-p">Helping immigrants settle seamlessly, with the 
          tools, guidance, and community they need.</p>
          <p className="frame-1-pp">www.welkom-u.ca</p>
        </div>
        <div className="frame-2">
          <div>
            <h2 className="frame-2h2">Context</h2>
            <p className="frame-2p">Relocating to a new country can be overwhelming. As someone who 
            relocated from Lagos, Nigeria to Kigali, Rwanda, I personally experienced 
            the culture shock and the struggle of settling in. This inspired the creation 
            of Welkom-U, a web-based PWA that supports people moving to Canada 
            by giving them access to housing, social connections, cultural information, 
            and other essential resources.</p>
          </div>
          <div>
            <h2 className="frame-2-h2">Introducing Welkom-U</h2>
            <div>
              <h3 className="frame-2-h3">Problem: </h3>
              <p className="frame-2p">When I moved from Lagos to Kigali in 2018, I found it difficult to access reliable, local information. Finding housing, understanding the job market, and adjusting to a new culture were major challenges during my first few months.</p>
            </div>
            <div>
              <h3 className="frame-2-h3">What I did:</h3>
              <p className="frame-2p">I designed Welkom-U, a digital platform to help immigrants prepare for relocation and settle in more easily. I spoke to others with similar experiences to identify common pain points and prioritised features that addressed their real needs.</p>
            </div>
            <div>
              <h3 className="frame-2-h3">Outcome:</h3>
              <p className="frame-2p">The tool provides verified housing listings, job opportunities, cultural tips, and ways to connect with local communities, all in one place. It’s designed from the perspective of someone who’s been through the process, with a focus on clarity, trust, and practical support.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-3">
        <div className="frame-3-header">
          <h2>Design Process</h2>
          <p>~9 Weeks to Idea Validation</p>
        </div>
        <div className="frame-3-b">
          {designprocess.map((designprocess) => (
            <div key={designprocess.id} className="frame-3-card">
              <img src={designprocess.image} alt={designprocess.tittle} className="frame-3-icon" />
              <div>
                <h2 className="frame-3-h2">{designprocess.tittle}</h2>
                <p className="frame-3-p">{designprocess.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="frame-4">
        <div className="frame-4-head">
          <h2>Research</h2>
          <p>I interviewed 14 newcomers to Canada and the UK to uncover needs, fears, and barriers.</p>
        </div>
        <div className="frame-4-b">
          <h3>What the users are saying</h3>
          <div className="frame-4-bb">
            <div className="frame-4-bbb">
              <img src="/Group 19006.png" alt="" className="yellow" />
              <img src="/Group 19004.png" alt="" className="yellow"/>
              <img src="/Group 19002.png" alt=""  className="yellow"/>
              <img src="/Group 19001.png" alt="" className="yellow"/>
            </div>
            <div className="frame-4bbb"> 
              <img src="/Group 19007.png" alt="" className="yellow-one" />
              <img src="/Group 19003.png" alt="" className="yellow-two" />
              <img src="/Group 19005.png" alt="" className="yellow-two"  />
              <img src="/Group 19000.png" alt="" className="yellow-twoo"  />
            </div>
          </div>
        </div>
      </div>

      <div className="frame-5">
        <div className="frame-5-a">
            <h2>Exploring Opportunities</h2>
            <p>I used the “How Might We” framework to turn user challenges into design opportunities. This helped me generate solution ideas grounded in real user insights and ensure the approach stayed focused on their needs.</p>
        </div>
        <div className="frame-5-b">
          <h3>How Might We</h3>
          <img src="/Group 19297.png" alt="" />
        </div>
      </div>

      <div className="frame-6">
        <div className="frame-6a">
          <h2>Competitor Analysis</h2>
          <p>I conducted a competitive review of similar products in Canada that support immigrants, identifying their strengths, gaps, and areas for improvement to inform the design of a more user-centred solution.</p>
        </div>
        <div className="frame-6b">
          <h3>What others are doing?</h3>
          <div className="frame-6b-one">
            <div className="frame-6b-one-1">
              <div className="six-card">
                <h3>OneSource Relocation</h3>
                <div className="six-cardone">
                  <div className="six-cardone-a" >
                    <h4>STRENGTHS</h4>
                    <p>Good content that is easy for the users</p>
                  </div>
                  <div className="six-cardone-b">
                    <h4>WEAKNESSES</h4>
                    <p>Information are not properly arranged for users</p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="frame-6b-one-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project1;
