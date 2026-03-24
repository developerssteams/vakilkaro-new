import { useState, useEffect } from "react";
import "../Query_Card.css";

const cards = [
  {
    title: "GST Registration",
    desc: "Register your business under GST with expert assistance and fast processing."
  },
  {
    title: "ISO Certificate",
    desc: "Get ISO certification to boost credibility and grow your business globally."
  },
  {
    title: "FSSAI License",
    desc: "Apply for FSSAI license easily and ensure food safety compliance."
  },
  {
    title: "ESI / EPF",
    desc: "Employee benefits registration with hassle-free documentation support."
  },
  {
    title: "Startup India",
    desc: "Register your startup and unlock government benefits and funding support."
  },
  {
    title: "Legal Support",
    desc: "24/7 professional legal assistance for your business needs."
  }
];

const Query_Card = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (active !== cards.length - 1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  const handleScroll = (e) => {
    e.preventDefault();

    if (animating) return;

    if (e.deltaY > 0 && active < cards.length - 1) {
      setAnimating(true);
      setActive((prev) => prev + 1);
      setTimeout(() => setAnimating(false), 500);
    }

    if (e.deltaY < 0 && active > 0) {
      setAnimating(true);
      setActive((prev) => prev - 1);
      setTimeout(() => setAnimating(false), 500);
    }
  };

  return (
    <section className="query-wrapper" onWheel={handleScroll}>
      <div className="query-stack">
        {cards.map((item, index) => {
          const isActive = index === active;
          const isPassed = index < active;

          return (
            <div
              key={index}
              className={`query-card ${isActive ? "active" : ""} ${isPassed ? "hide" : ""}`}
              style={{
                top: `${index * 8}px`,
                zIndex: cards.length - index,
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Query_Card;