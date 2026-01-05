import React from "react";
import timelineImg from "../assets/Group87.png"; // image ka path sahi rakhna
import "../VakilKaroWay.css";

const VakilKaroWay = () => {
  return (
    <section className="vk-image-wrapper">
      <img
        src={timelineImg}
        alt="VakilKaro Way Process"
        className="vk-image"
      />
    </section>
  );
};

export default VakilKaroWay;
