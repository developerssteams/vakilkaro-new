import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "../LegalRepresentation.css";

const services = [
  "Company Registration",
  "GST Registration",
  "Trademark Registration",
  "Legal Notice",
  "Startup Compliance",
  "Business Consulting",
];

const LegalRepresentation = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let index = 0;

    const interval = setInterval(() => {
      const cardWidth = slider.children[0].offsetWidth + 24;

      index++;
      if (index > services.length - 4) index = 0;

      slider.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="legal-section">
      
      {/* ===== HEADING STRIP ===== */}
     

      {/* ===== SUB HEADER ===== */}
      <div className="legal-header">
         <div className="verified-strip">
        <h1>
          Specialized <span> Legal Representation </span>
        </h1>
      </div>
        <h2>
         
        </h2>
        <p>
          All-in-one platform for online legal consultation, business
          incorporation, corporate compliance, and startup-friendly
          solutions—tailored for every industry.
        </p>
      </div>

      {/* ===== SLIDER ===== */}
      <div className="legal-slider" ref={sliderRef}>
        {services.map((title, i) => (
          <div className="legal-card" key={i}>
            <div>
              <h3>{title}</h3>
              <p>Lorem Ipsum is simply dummy text</p>
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
