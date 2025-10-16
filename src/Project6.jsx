import React from "react";
import "./styles/projectsix.css";

const Project6 = () => {
  return (
    <section className="project-page">
      <div className="img-content">
        <img src="/Frame 3232999 5.png" alt="" />
      </div>
      <div className="sixone">
        <div className="sixone-one">
          <div className="sixone-head">
            <p>UX/UI DESIGN</p>
            <h2>CouponVouch</h2>
          </div>
          <p>Making online shopping smarter, with verified deals you can actually trust.</p>
          <a href="https://www.couponvouch.com/">www.couponvouch.com</a>
        </div>
        <div className="sixone-two">
          <div className="sixone-tw">
            <h2>Project Overview</h2>
            <p>CouponVouch is a deals and voucher aggregation platform that helps users discover trusted coupon codes, discounts, and promos all in one place. By aggregating offers from major brands and retailers, CouponVouch enables smart shopping, cost savings, and better deal discovery.</p>
          </div>
        </div>
      </div>

      <div className="sixtwo">
        <div className="sixtwo-a">
          <div className="sixtwo-head">
            <h2>The Challenge</h2>
          </div>
          <p>In many cities, ride-hailing experiences can feel transactional and confusing.</p>
        </div>
        <div className="sixtwo-b">
          <div className="sixtwo-bb">
            <h3>Users often face challenges such as:</h3>
            <ul>
              <li> Many shoppers struggle to find valid, working coupons across different stores and waste time hunting them down.</li>
              <li>Platforms often display expired or invalid codes, undermining trust and frustrating users.</li>
              <li>Aggregator sites typically have cluttered layouts and poor discoverability, making it hard to filter and find relevant deals.</li>
              <li>Users want a fast, reliable, and trustworthy way to access discounts without sifting through noise.</li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>

      <div className="six-three">
        <div className="six-three-a">
          <div className="six-three-head">
            <h2>My Role</h2>
          </div>
          <p>As the Product Designer, I took on the responsibility of transforming CouponVouch into a user-centric coupon platform.</p>
        </div>
        <div className="six-three-b">
          <div className="six-three-bb">
            <h2>My key responsibilities included:</h2>
            <ul>
              <li>Researching competitive coupon sites and user behaviour around coupon use</li>
              <li>Defining user flows and information architecture</li>
              <li>Designing wireframes, high-fidelity mockups, and interactive prototypes</li>
              <li>Building a modular design system for consistency</li>
              <li>Conducting usability tests and iterating designs based on feedback</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="six-four">
        <div className="six-foura">
          <div className="six-four-head">
            <h2>Research & Discovery</h2>
          </div>
          <img src="/Group 536.png" alt="" />
        </div>
        <div className="six-fourb">
          <div className="six-fourbb">
            <h2>User Interviews</h2>
            <div className="six-fourbbli">
              <p>I spoke with users who frequently search for coupons, asking about frustrations when codes don’t work, how they verify discounts, and what features would make saving easier. Key insights included:</p>
              <ul>
                <li>Users want quick confirmation that a code is still valid</li>
                <li>They prefer minimal friction (e.g. not too many clicks)</li>
                <li>Trust is critical — they want assurance the platform is reliable</li>
              </ul>
            </div>
          </div>
          <div className="six-fourbbb">
            <h2>Persona & Problem Definition</h2>
            <div className="six-fourbbb-one">
              <p>Based on research, I defined primary user groups:</p>
              <ul>
                <li> <span>Deal Hunters: </span>Frequent shoppers always on the lookout for discounts  </li>
                <li> <span>Occasional Savers: </span>Users who search for deals only before big purchases</li>
                <li> <span>Skeptical Users: </span>People who often doubt whether a coupon will actually work</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="six-five">
        <div className="six-fivee">
          {/* img src="/v3 1.png" alt="" />
          <img src="/V2 2.png" alt="" /> */}
          <img src="/Screenshot 2025-10-16 at 07.59.23.png" alt="" />
        </div>
      </div>

      <div className="six-six">
        <div className="six-sixx">
          <div className="ssix-a">
            <img src="/Property 1=Beauty 1.png" alt="" />
            <div>
              <img src="/Group 82 1.png" alt="" />
              <img src="/Frame 169 1.png" alt="" />
            </div>
          </div>
          <div className="ssix-b">
            <img src="/Screenshot 2025-10-16 at 08.12.01.png" alt="" />
          </div>
        </div>
      </div>

      <div className="ree">
        <div className="six-seven">
          <div className="six-sevenn">
              <h2>Outcome</h2>
              <ul>
                <li>Users reported higher confidence that coupon codes would work</li>
                <li>The platform experienced increased engagement and higher click-through rates on deals</li>
                <li>Bookmarking and sharing of deals grew, boosting overall reach</li>
                <li>The modular design system made it easier for the engineering team to maintain consistency</li>
                <li>Trust signals like “Verified” and expiration dates reduced user frustration and abandonment</li>
              </ul>
          </div>
        </div>

        <div className="six-eight">
          <div className="eight">
            <h2>Reflection & Learnings</h2>
            <ul>
              <li>Trust indicators (verification badges, expiry status, source labels) are essential in a deals platform.</li>
              <li>Simplicity and clarity outperform feature-heavy interfaces.</li>
              <li>Early testing and iteration prevent major usability issues down the line.</li>
              <li>A solid design system is a long-term investment that pays off in scalability and faster development.</li>
            </ul>
            <p>Link to site <a href="https://www.couponvouch.com/">https://www.couponvouch.com</a></p>
          </div>
        </div>
      </div>



    </section>
  );
};

export default Project6;
