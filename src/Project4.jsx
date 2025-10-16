import React from "react";
import "./styles/projectfour.css";

const Project4 = () => {
  return (
    <section className="project-page">
      <div className="frame">
        {/* <img src="/Frame 3232999 3.png" alt="" /> */}
        <img src="/Screenshot 2025-10-16 at 05.11.30.png" alt="" />
      </div>
      <div className="frame-one">
        <div className="frame-onea">
          <div className="frame-oneaa">
            <p>UX/UI DESIGN</p>
            <h2>SavePlus</h2>
          </div>
          <p>Helping change makers raise funds, share stories, and inspire action.</p>
          <a>Video presentation</a>
          <a href="#">https://saveplus.io</a>
        </div>
        <div className="frameoneb">
          <h2>Project Overview</h2>
          <p>Helping one person may not change the entire world, but it can transform their world.</p>
          <p>In East Africa, raising funds for personal, medical, or community needs remains a major challenge, particularly during emergencies or life-changing events. Many people lack access to secure, transparent, and user-friendly crowdfunding platforms that make it simple to request and receive financial support.
          SavePlus was designed to bridge this gap, a digital crowdfunding platform that empowers users to raise funds for meaningful causes, from celebrations and education to unexpected challenges like accidents or illnesses.</p>
          <p>My goal as the Product Designer was to create an accessible, trustworthy, and community-driven platform that helps individuals mobilize financial support quickly and safely when it matters most. The result is a product that not only enables giving but also builds trust, connection, and impact within local communities.</p>
        </div>
      </div>

      <div className="frame-three">
        <div className="frame-three-a">
          <h2>Research</h2>
          <p>I conducted user interviews with four individuals who had previously raised funds and two others planning to start fundraising campaigns. These remote phone interviews aimed to uncover the key challenges users face when creating campaigns and receiving donations.</p>
          <p>Insights from these conversations revealed that setting up a cause and managing contributions is often confusing, unstructured, and lacks proper support systems. This research provided valuable input for designing a more intuitive, guided, and user-centered crowdfunding experience that simplifies the entire fundraising journey.</p>
        </div>
        <div className="frame-three-b">
          <div className="frame-3bb">
            <h4>Findings</h4>
            <p>Through this research, I identified three primary user groups commonly involved in the fundraising journey:</p>
          </div>
          <div className="frame-3bc">
            <div>
              <img src="/Avatars.png" alt="" />
              <p> <span>The Creator –</span> This is the individual who initiates and manages a fundraising campaign. They may be organizing the effort on behalf of someone else and are not always the direct beneficiary of the funds raised. Their role is central to shaping the campaign’s message, building trust, and driving engagement throughout the crowdfunding process.</p>
            </div>
            <div>
              <img src="/Avatars (1).png" alt="" />
              <p> <span>The Donor – </span> An individual who contributes financially to support a cause or campaign they care about. Donors play a vital role in the crowdfunding ecosystem, helping individuals and communities achieve their goals through trust, generosity, and meaningful engagement.</p>
            </div>
            <div>
              <img src="/Avatars (2).png" alt="" />
              <p> <span>The Beneficiary –</span> The individual or organization that receives the funds raised through donations. Beneficiaries are the end recipients of financial support, and their stories help build trust, transparency, and emotional connection within the crowdfunding platform.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-4">
        <h2>Understanding the Current Fundraising
        Landscape in East Africa</h2>
        <p>To gain a deeper understanding of how users create fundraising campaigns, donate to causes, and access raised funds, I conducted a competitive analysis of leading crowdfunding platforms such as GoFundMe, Kickstarter, Patreon, and Indiegogo. </p>
        <p>I explored each platform’s core features, user flows, and fund distribution processes, while also reviewing user feedback and reviews to identify common pain points, UX challenges, and best practices. This research provided valuable insights into what makes a crowdfunding experience effective, trustworthy, and user-friendly, shaping the foundation for designing a localized, accessible fundraising platform for East Africa.</p>
      </div>

      <div className="frame-5">
        <div className="frame-5a">
          <h2>Sketches</h2>
          <p>To visualize and refine the product experience, I designed and tested multiple wireframe variations to explore different layout structures, navigation patterns, and interaction flows. This iterative process helped identify the most intuitive, user-friendly design, ensuring the final crowdfunding platform delivered a seamless and engaging user experience across all devices.</p>
        </div>
        <div className="frame-5b">
          <img src="/Rectangle 86.png" alt="" />
          <img src="/Rectangle 10815.png" alt="" />
          <img src="/Rectangle 10816.png" alt="" />
        </div>
      </div>

      <div className="frame-6">
        <div className="frame-6a">
          <div className="frame-6a-head">
            <h2>Landing Page</h2>
          </div>
          <p>I designed the landing page with a focus on cultural relevance, emotional connection, and user trust. Every visual element, from the carefully selected imagery to the integration of <span>Imigongo</span>, a traditional East African design pattern, was chosen to create a familiar and authentic user experience that resonates with local audiences.</p>
          <p>This culturally inspired design approach not only fosters trust but also encourages users to support meaningful causes within their communities.</p>
          <p> To enhance usability, I included a brief onboarding walkthrough that helps first-time users quickly understand how the crowdfunding platform works, making the experience accessible, engaging, and easy to navigate from the very first interaction.</p>
        </div>
        <div className="frame-6b">
          <img src="/Mask group 2.png" alt="" className="six-img" />
          <img src="/Group 2.png" alt=""  />
        </div>
      </div>

      <div className="framee-7">
        <div className="frame-7a">
          <div className="frame-7ahead">
            <h2>Cause Card View</h2>
          </div>
          <p>I designed the cause card to give donors essential information at a glance, making it easier for them to make informed and confident giving decisions. Each card includes a beneficiary image, a short cause description, and a category label, all crafted to provide context, clarity, and emotional connection. </p>
          <p>To strengthen trust and transparency, I added a progress indicator that displays how much has been raised toward the campaign goal, along with a verified badge confirming that the cause has been reviewed and approved by the platform. </p>
          <p>Additionally, donors can easily share campaigns across channels, helping to increase visibility, reach, and community participation. This thoughtful design ensures the crowdfunding experience feels credible, engaging, and user-centered from discovery to donation.</p>
        </div>
        <div className="frame-7b">
          <img src="/Mask group 3.png" alt="" className="seven-img"  />
          <img src="/Group (1).png" alt="" className="seven-imgg" />
        </div>
      </div>

      <div className="eight">
        
      </div>





    </section>
  );
};

export default Project4;
