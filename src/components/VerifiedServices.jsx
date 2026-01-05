import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "../VerifiedServices.css";

const services = [
  { title: "Company Registration", color: "red" },
  { title: "GST Registration", color: "purple" },
  { title: "Trademark Registration", color: "blue" },
  { title: "FSSAI Registration", color: "navy" },
  { title: "Company Registration", color: "lightblue" },
  { title: "Trade License", color: "green" },
];

const VerifiedServices = () => {
  const sliderRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      const cardWidth = slider.children[0].offsetWidth + 24;

      index++;
      if (index > services.length - 5) index = 0;

      slider.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="vs-section">
      <div className="vs-header">
        <h2>
          Our <span>Verified Services</span>
        </h2>
        <p>
          All-in-one platform for online legal consultation, business
          incorporation, corporate compliance, and startup-friendly
          solutions—tailored for every industry.
        </p>
      </div>

      <div className="vs-slider" ref={sliderRef}>
        {services.map((item, i) => (
          <div className={`vs-card ${item.color}`} key={i}>
            <div>
              <h3>{item.title}</h3>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>

            <span className="vs-arrow">
              <FiArrowUpRight />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerifiedServices;
