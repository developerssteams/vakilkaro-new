import { useEffect, useRef } from "react";
import "../Story.css";
import teamImg from "../assets/team.jpeg";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: ".story-section",
        start: "top top",
        end: "+=500",
        scrub: true,
        pin: true,
      },
      width: "620px",
      height: "420px",
      borderRadius: "20px",
      ease: "none",
    });
  }, []);

  return (
    <section className="story-section">
      <div className="story-row">

        {/* IMAGE */}
        <div className="story-image" ref={imgRef}>
          <img src={teamImg} alt="Vakilkaro Team" />
        </div>

        {/* CONTENT (RIGHT SIDE ALWAYS) */}
        <div className="story-content">
          <h3>
            The Vakilkaro Story: <br />
            <span>Built for You</span>
          </h3>

          <p>
            We are on a mission to make Entrepreneurship easier and affordable to millions. IndiaFilings provides a simple and intuitive platform for setting up a business and managing compliance. We started our journey in 2014 and bootstrapped the business till 2022, serving over 1 lakh businesses. In 2022, we raised funding from institutional investors to further our mission.
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
