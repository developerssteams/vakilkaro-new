import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import ICICI from "../assets/Images/Icici.jpg";
import AXIS from "../assets/Images/Axis.png";
import HDFC from "../assets/Images/Icici.jpg";
import KOTAK from "../assets/Images/Kotak.jpg";
import YESBANK from "../assets/Images/Yes.png";
import AU from "../assets/Images/Au.png";
import SOUTH from "../assets/Images/South.png";
import DBS from "../assets/Images/Dbs.png";
import STANDARD from "../assets/Images/Standard.png";
import INDUSIND from "../assets/Images/Indusind.png";
import SHRIRAM from "../assets/Images/Shriram.png";
import ADITYA from "../assets/Images/Aditya.jpg";

function ClientsSection() {
  const clients = [
    { name: "ICICI Bank", img: ICICI },
    { name: "Axis Bank", img: AXIS },
    { name: "HDFC Bank", img: HDFC },
    { name: "Kotak", img: KOTAK },
    { name: "Yes Bank", img: YESBANK },
    { name: "AU Small Finance", img: AU },
    { name: "South Indian Bank", img: SOUTH },
    { name: "DBS", img: DBS },
    { name: "Standard Chartered", img: STANDARD },
    { name: "IndusInd Bank", img: INDUSIND },
    { name: "Shriram", img: SHRIRAM },
    { name: "Aditya Birla Finance", img: ADITYA },
  ];

  return (
    <section className="clients-section container my-5 text-center">
      <h1 className="clients-heading mb-3">Our Clients</h1>
      <h3 className="clients-subtitle mb-4">
        We work with top Indian Institutions to further our shared mission of
        improving ease of doing business and promoting Entrepreneurship in India.
      </h3>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={30}
        freeMode={true}
        grabCursor={true}
        loop={true}
        slidesPerView={6}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 4 },
          480: { slidesPerView: 3 },
          0: { slidesPerView: 2 },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="client-card p-3">
              <img
                src={client.img}
                alt={client.name}
                style={{
                  maxWidth: "120px",
                  margin: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ClientsSection;
