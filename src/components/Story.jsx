import "../Story.css";
import teamImg from "../assets/team.jpeg"; // ✅ image import
import { FiArrowUpRight } from "react-icons/fi";

const Story = () => {
  return (
    <section className="story-section">
          <div className="story-hero">
    <img src={teamImg} alt="Vakilkaro Team" />
  </div>
      <div className="story-container">

        {/* LEFT IMAGE PLACEHOLDER */}
        <div >
           <img  className="story-image" src={teamImg} alt="Vakilkaro Team"/>

        </div>

        {/* RIGHT CONTENT */}
        <div className="story-content">
          <h2>
            The Vakilkaro Story: <br />
            <span>Built for You</span>
          </h2>

          <p>
            We are on a mission to make Entrepreneurship easier and affordable
            to millions. IndiaFilings provides a simple and intuitive platform
            for setting up a business and managing compliance.
          </p>

          <p>
            We started our journey in 2014 and bootstrapped the business till
            2022, serving over 1 lakh businesses. In 2022, we raised funding
            from institutional investors to further our mission.
          </p>

          <button className="story-btn">
            Know More <FiArrowUpRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Story;
