import { useEffect, useRef } from "react";
import "../VerifiedServices.css";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  { title: "Company Registration", desc: "Lorem ipsum is simply dummy text", color: "red" },
  { title: "GST Registration", desc: "Lorem ipsum is simply dummy text", color: "purple" },
  { title: "Trademark Registration", desc: "Lorem ipsum is simply dummy text", color: "blue" },
  { title: "FSSAI Registration", desc: "Lorem ipsum is simply dummy text", color: "darkblue" },
  { title: "Company Registration", desc: "Lorem ipsum is simply dummy text", color: "lightblue" },
  { title: "Trade License", desc: "Lorem ipsum is simply dummy text", color: "green" },
];

const VerifiedServices = () => {
  const sliderRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const card = sliderRef.current.children[0];
      if (!card) return;

      const cardWidth = card.offsetWidth + 20;

      indexRef.current++;

      if (indexRef.current >= services.length) {
        indexRef.current = 0;
      }

      sliderRef.current.scrollTo({
        left: cardWidth * indexRef.current,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="verified-section">
      <div className="container">
        <div className="verified-header text-center text-md-start">
          <h2>Our Verified Services</h2>
          <p>
            All-in-one platform for online legal consultation, business
            incorporation, corporate compliance, and startup-friendly
            solutions—tailored for every industry.
          </p>
        </div>

        <div className="services-row mt-4" ref={sliderRef}>
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
      </div>
    </section>
  );
};

export default VerifiedServices;
