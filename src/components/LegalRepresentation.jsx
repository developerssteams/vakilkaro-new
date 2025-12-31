import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "../LegalRepresentation.css";

const services = [
  { title: "Company Registration", desc: "Lorem ipsum is simply dummy text" },
  { title: "Company Registration", desc: "Lorem ipsum is simply dummy text" },
  { title: "Company Registration", desc: "Lorem ipsum is simply dummy text" },
  { title: "Company Registration", desc: "Lorem ipsum is simply dummy text" },
  { title: "Company Registration", desc: "Lorem ipsum is simply dummy text" },
];

const LegalRepresentation = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;
    const interval = setInterval(() => {
      const cardWidth = slider.children[0].offsetWidth + 24;
      index++;

      if (index >= services.length) index = 0;

      slider.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="legal-section">
      <div className="legal-header">
        <h2>Specialized Legal Representation</h2>
        <p>
          All-in-one platform for online legal consultation, business
          incorporation, corporate compliance, and startup-friendly
          solutions—tailored for every industry.
        </p>
      </div>

      <div className="legal-slider" ref={sliderRef}>
        {services.map((item, i) => (
          <div className="legal-card" key={i}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>  
            </div>

            <span className="arrow-icon">
              <FiArrowUpRight />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalRepresentation;
