import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";
import "../WhyVakilkaro.css";


// ✅ Import images from assets
import user1 from "../assets/Images/User1.png";
import user2 from "../assets/Images/User2.png";
import user3 from "../assets/Images/User3.png";
import user4 from "../assets/Images/User4.jpg";
import user5 from "../assets/Images/User5.png";
import user6 from "../assets/Images/User6.png";

function Testimonials() {
  const testimonials = [
    {
      name: "Abhishek Patel",
      company: "CEO, TechVision",
      image: user1,
      feedback: "Working with this team has been a game-changer. Their solutions helped us scale our business rapidly."
    },
    {
      name: "Sahil Ved",
      company: "Marketing Manager, BrightAds",
      image: user2,
      feedback: "Amazing experience! The strategies they suggested brought us outstanding ROI and engagement."
    },
    {
      name: "Ashok Saini",
      company: "CTO, FinSolve",
      image: user3,
      feedback: "Their technical expertise is unmatched. Highly reliable and innovative problem solvers."
    },
    {
      name: "Neha Verma",
      company: "HR Head, PeopleFirst",
      image: user4,
      feedback: "They truly understand what businesses need. We streamlined hiring with their great support."
    },
    {
      name: "Hemant Sharma",
      company: "Founder, EduNext",
      image: user5,
      feedback: "Professional and trustworthy. Helped us grow our online platform in record time."
    },
    {
      name: "Mukesh Kumawat",
      company: "COO, HealthCarePlus",
      image: user6,
      feedback: "The results were beyond our expectations. Our operations are much smoother now."
    }
  ];

  return (
    <section className="why-card">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <br />
      <div className="container" >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false} // ✅ arrows disabled
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 }
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="why-card">
              <img src={item.image} alt={item.name} className="testimonial-img" />
              <h4 className="testimonial-name">{item.name}</h4>
              <p className="testimonial-role">
                <span>{item.company}</span>
              </p>
              <p className="testimonial-text">"{item.feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
