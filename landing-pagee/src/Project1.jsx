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

      <div className="frame-7">
        <div className="frame-7a">
          <h2>Challenges and Learning</h2>
          <p>This project was my first opportunity to design for people relocating across countries. To better understand the needs of immigrants, I explored how relocation and immigration support apps work and gathered key insights from two primary sources.</p>
        </div>
        <div className="frame-7b">
          <div className="frame-7b1">
            <h3>UX Collective Article <span>“Making the move abroad less difficult — a UX case study”</span> by Paul Naylor</h3>
            <div className="frame-761-group">
              <img src="/Group 19299.png" alt="" />
            </div>
          </div>
          <div className="frame-7b2">
            <h3>UX Magazine <span> “Onboarding: best move for user retention in mobile apps”</span> </h3>
            <div className="frame-7b2-group">
              <div className="frame-7b2-groupp">
                <div className="frame-7b2-grouppp">
                  <ul>
                    <li>Users should be able to quickly understand the purpose of a page without confusion or delay.</li>
                    <li>Use clear, straightforward language that’s easy for users to understand</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="frame-8">
        <div className="frame-8a">
          <h3>User Flow</h3>
          <p>This user flow reflects the thinking and decisions made during the design process.</p>
        </div>
        <div className="frame-8b">
          <img src="/Information Art Correct 1.png" alt="" />
        </div>
      </div>

      <div className="frame-9">
        <div className="frame-9-a">
          <h3>Wireframes</h3>
          <p>I created initial sketches to explore and visualise design ideas.</p>
        </div>
        <div className="frame-9-b">
          <img src="/Wireframe white 1.png" alt="" />
        </div>
      </div>

      <div className="frame-10">
        <div className="frame-10a">
          <h3>Design Iteration</h3>
          <p>I tested several iterations of the homepage to ensure users could quickly find the information they need to make informed decisions, while also improving the visual appeal of the content feed.</p>
        </div>
      </div>

      <div className="frame-11">
        <img src="/Desktop - 2.png" alt="" className="group-19302"/>
        <div className="frame-11a">
            <h3>Feedbacks & Fixes</h3>
            <p>Based on testing and feedback, I identified the need to improve the search functionality, refine the card layout and arrangement, adjust the scroll icon, and enhance the side navigation for better usability.</p>
        </div>
      </div>
      <div className="frame-12">
        <div>
          <h3>Previous Iteration</h3>
          <div className="frame-12a">
            <img src="/Frame 3233040.png" alt="" />
          </div>
        </div>
        <div>
          <h3>Current Iteration</h3>
          <div className="frame-12b">
            <img src="/Frame 3233041.png" alt="" />
          </div>
        </div>
      </div>

      <div className="frame-13">
        <div className="frame-13a">
            <div className="frame-13aa">
              <div className="frame-13aa1">
                <h3>Exchange Currency</h3>
                <p>Exchange money from one local 
                currency to another</p>
              </div>
              <div>
                <img src="/coin 1.png" alt="" />
              </div>
            </div>
            <ul>
              <li>Most users didn’t realise 
            the cards were clickable.</li>
            <li> I also found that the cards contained 
            too much information, all crowded in the 
            same area, which made them harder to 
            scan and engage with.</li>
            </ul>
        </div>
        <div className="frame-13b">
          <img src="/Group 19202.png" alt="" />
          <p>I kept the same width and icon as the previous 
          card but increased the height to create better visual balance. 
          This adjustment allowed for improved icon placement and 
          added subtle background patterns for a more polished look.
          I positioned the text next to the call-to-action (CTA) to 
          make it clear to users that it is interactive and clickable.</p>

        </div>
      </div>

      <div className="frame-14">
        <div>
        <img src="/Group 19204.png" alt="" />
        </div>
        <div>
        <img src="/Current design.png" alt="" />
        </div>
      </div>
      

      <div className="frame-15">
        <div className="frame-15a">
          <h2>High Fidelity Design</h2>
          <div className="frame-15aa">
            <p>Accommodation Info – <span>I added location-specific accommodation details to ensure search results are relevant to the user’s destination country</span>.</p>
            <p>Utilities Filter – <span>This feature allows users to narrow down accommodation options based on their specific needs, such as available amenities.</span></p>
            <p>Search Criteria –<span> Users can select their preferred location, accommodation type, and set a budget to tailor the results to their preferences</span>.</p>
            <p>Apartment Info – <span>Key details such as rental price and important features are highlighted to give users the essential information at a glance</span>.</p>
            <p>Detailed Information – <span>Additional context is provided to help users make well-informed decisions about the apartment.</span></p>
            <p>Map – <span>An integrated map helps users understand the exact location of the property and explore the surrounding area.</span></p>
            <p>Top Activities – <span>Highlights indoor and outdoor activities available in the selected location, helping users engage with their new surroundings.</span></p>
          </div>
        </div>
        <div className="frame-15b">
          <img src="/Image 1.png" alt="" />
          <img src="/Image 2.png" alt="" />
          <img src="/Image 3.png" alt="" />
          <img src="/Image 4.png" alt="" />
        </div>
      </div>

      <div className="frame-16">
        <h2>Developer Handoff </h2>
        <p>To conclude the project, I took the extra step of consolidating all design components into a structured design system. This provided consistency and made it easier for the development team to implement and maintain the product over time. I facilitated the design handoff using Zeplin to ensure smooth collaboration and accurate execution.</p>
        <p className="frame-16p"><span> GRID:</span>The layout uses a 12-column grid system to ensure consistent spacing and alignment across the design.</p>
        <p className="frame-16p"><span>ICONS:</span> Some of the icons used in this project were sourced from <a href="https://remixicon.com/"> Remix Icon</a>, an open-source React icon library.  <br />
        All icons are sized at 24px by 24px for visual consistency.</p>
      </div>
      <div className="frame-16a">
        <img src="/Group 19230.png" alt="" />
      </div>

      <div className="frame-17">
        <div>
          <img src="/Screenshot 2025-10-10 at 07.33.36 1.png" alt="" />
        </div>
      </div>

      <div className="frame-18">
        <div className="frame-18a">
          <h2>Colours</h2>
          <img src="/Group 1.png" alt="" />
        </div>
      </div>

      <div className="frame-19">
        <h2>Learning & Achievement</h2>
        <p>This has been one of the most exciting and meaningful projects I’ve worked on. Prior to this, I had never designed a product specifically for people migrating from one country to another. Having experienced the challenges of relocating from Nigeria to Rwanda myself, I understood how overwhelming it can be to face so many unknowns.
Welkom-U was born from that insight — a product designed to support newcomers with relevant, localised information. It has since received recognition from <a href="https://www.facebook.com/venninnovation/posts/225060796287907">Venn Innovation</a> for its impact on individuals planning to migrate to Canada. Additionally, Welkom-U’s CEO was named one of Atlantic Business magazine’s 30 Under 30.
 
View the live project: <a href="https://www.welkom-u.ca/">www.welkom-u.ca</a></p>
      </div>
    </section>
  );
};

export default Project1;
