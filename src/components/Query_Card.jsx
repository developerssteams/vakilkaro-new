import { useState, useEffect, useRef } from "react";
import "../Query_Card.css";

const cards = [
  {
    title: "Certificates & Licenses",
    tabs: [
      { name: "GST Registration", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "ISO Certificate", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "FSSAI", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "ESI/EPF", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Startup India", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "ISO Certificate",
    tabs: [
      { name: "GST Registration", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "ISO Certificate", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "FSSAI", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "ESI/EPF", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Startup India", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "FSSAI License",
    tabs: [
      { name: "GST Registration", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "ISO Certificate", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "FSSAI", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "ESI/EPF", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Startup India", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "ESI / EPF",
    tabs: [
      { name: "GST Registration", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "ISO Certificate", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "FSSAI", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "ESI/EPF", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Startup India", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "Startup India",
    tabs: [
      { name: "GST Registration", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "ISO Certificate", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "FSSAI", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "ESI/EPF", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Startup India", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "Legal Support",
    tabs: [
      { name: "GST Registration", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "ISO Certificate", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "FSSAI", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "ESI/EPF", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Startup India", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  }
];

const Query_Card = () => {
  const [active, setActive] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);

  const wrapperRef = useRef(null);

  // body scroll control
 const handleWheel = (e) => {
  const isAtLastCard = active === cards.length - 1;
  const isScrollingDown = e.deltaY > 0;
  const isScrollingUp = e.deltaY < 0;

  // 🔥 only prevent scroll inside card area
  if (
    (!isAtLastCard && isScrollingDown) ||
    (active > 0 && isScrollingUp)
  ) {
    e.preventDefault();

    if (animating) return;

    if (isScrollingDown && active < cards.length - 1) {
      setAnimating(true);
      setActive((prev) => prev + 1);
      setTimeout(() => setAnimating(false), 500);
    }

    if (isScrollingUp && active > 0) {
      setAnimating(true);
      setActive((prev) => prev - 1);
      setTimeout(() => setAnimating(false), 500);
    }
  }
};

  // 🔥 FIXED WHEEL EVENT
  useEffect(() => {
    const wrapper = wrapperRef.current;

    const handleWheel = (e) => {
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

    if (wrapper) {
      wrapper.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("wheel", handleWheel);
      }
    };
  }, [active, animating]);

  return (
    <section className="query-wrapper" ref={wrapperRef}>
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
              <div className="Queryleft">
                <h2>{item.title}</h2>

                <div className="tabs">
                  {item.tabs.map((tab, i) => (
                    <button
                      key={i}
                      className={activeTab === i ? "active-tab" : ""}
                      onClick={(e) => {
                        e.stopPropagation(); // scroll block
                        setActiveTab(i);
                      }}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>

                <div className="form">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Location" />
                  <input type="email" placeholder="Email Address" />
                  <input type="text" placeholder="Phone Number" />

                  <button className="submit-btn">
                    Submit Your Query
                  </button>
                </div>
              </div>

              <div className="queryright">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                  alt="library"
                />
              </div>
            </div>
          );
        })}
      </div>

      <br />

      {/* VIDEO */}
      <div className="video-section">
        <iframe
          src={cards[active].tabs[activeTab].video}
          title="video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Query_Card;