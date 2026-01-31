import { useEffect, useRef } from "react";
import "../Story.css";

const ScrollDriven = () => {
  const sectionRef = useRef(null);
  const imageBoxRef = useRef(null);
  const textBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const imageBox = imageBoxRef.current;
      const textBox = textBoxRef.current;

      if (!section || !imageBox || !textBox) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      let progress = -rect.top / vh;
      progress = Math.max(0, Math.min(1, progress));

      /* PHASE 1 (0 → 0.3) */
      if (progress <= 0.3) {
        const p = progress / 0.3;

        textBox.style.opacity = p;
        textBox.style.transform = `translateY(${120 - p * 120}px)`;
        textBox.style.width = `${p * 50}vw`;
        textBox.style.padding = `${p * 80}px`;

        imageBox.style.width = "100vw";
      }

      /* PHASE 2 (0.3 → 1) */
      if (progress > 0.3) {
        const p = (progress - 0.3) / 0.7;

        textBox.style.opacity = 1;
        textBox.style.transform = "translateY(0)";
        textBox.style.width = "50vw";
        textBox.style.padding = "80px";

        imageBox.style.width = `${100 - p * 50}vw`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-sectionn" ref={sectionRef}>
      <div className="sticky-wrap">

        {/* IMAGE LEFT */}
        <div className="image-box" ref={imageBoxRef}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="scroll"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="text-box" ref={textBoxRef}>
          <h2>Scroll Driven Layout</h2>
          <p>
            Jaise hi image choti hoti hai,
            ye text niche se aakar
            right side ki jagah fill karta hai.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ScrollDriven;
