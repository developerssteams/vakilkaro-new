import { useEffect, useRef } from "react";
import "../LegalRepresentation.css";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  { title: "Company Registration", desc: "Lorem ipsum is simply dummy text", color: "red" },
  { title: "GST Registration", desc: "Lorem ipsum is simply dummy text", color: "purple" },
  { title: "Trademark Registration", desc: "Lorem ipsum is simply dummy text", color: "blue" },
  { title: "FSSAI Registration", desc: "Lorem ipsum is simply dummy text", color: "darkblue" },
  { title: "Company Registration", desc: "Lorem ipsum is simply dummy text", color: "lightblue" },
  { title: "Trade License", desc: "Lorem ipsum is simply dummy text", color: "green" },
];

const LegalRepresentation = () => {
  const sliderRef = useRef(null);
  let index = 0;

  useEffect(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  const isMobile = window.innerWidth <= 767;
  let currentIndex = 0;

  const interval = setInterval(() => {
    const cardWidth = isMobile
      ? slider.offsetWidth
      : slider.children[0].offsetWidth + 20;

    currentIndex++;

    if (currentIndex >= services.length) {
      currentIndex = 0;
    }

    slider.scrollTo({
      left: cardWidth * currentIndex,
      behavior: "smooth",
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);


  return (
    <section className="verified-section">
      <div className="verified-header">
        <h2>Specialized Legal Representation</h2>
        <p>
          All-in-one platform for online legal consultation, business
          incorporation, corporate compliance, and startup-friendly
          solutions—tailored for every industry.
        </p>
      </div>

      <div className="services-row" ref={sliderRef}>
        {services.map((item, i) => (
          <div key={i} className={`service-card ${item.color}`}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="icon">
              <FiArrowUpRight />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalRepresentation;
