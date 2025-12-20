import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../App.css";

function HeaderSection() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [otp, setOtp] = useState("");
  const [serviceType, setServiceType] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (timer === 0) return;
    const i = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(i);
  }, [timer]);

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setOtpSent(true);
      setTimer(30);
    }
  };

  return (
    <section className="header-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* LEFT */}
          <div className="col-lg-6" data-aos="fade-right">
            <h1 className="hero-title">
              <span className="typing-text">
                <Typewriter
                  words={[
                    "Trademark Registration",
                    "Company Incorporation",
                    "GST Compliance",
                    "Startup Legal Solutions",
                  ]}
                  loop={0}
                  cursor
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
              <br />
              Made Simple With <span className="highlight">Vakilkaro</span>
            </h1>

            <p className="hero-desc">
              Business Registration, Trademark, Taxation, Legal Compliances &
              Legal Services in few clicks.
            </p>

            <div className="row bannerserlist">
              <div className="col-12 col-md-6"><p>✔ 100% Hassle Free Process</p></div>
              <div className="col-12 col-md-6"><p>⚖ Expert Legal Guidance</p></div>
              <div className="col-12 col-md-6"><p>⚡ Fast & Affordable</p></div>
              <div className="col-12 col-md-6"><p>👍 15K+ Businesses</p></div>
            </div>

            <div className="hero-btns">
              <button
                className="btn btn-warning fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#enquiryModal"
              >
                Register your business
              </button>

              <a
                href="#"
                className="btn btn-danger fw-bold ms-lg-3 mt-3 mt-lg-0"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="header-slider shadow rounded-4">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 2500 }}
                loop
              >
                <SwiperSlide>
                  <img src="https://www.vakilkaro.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fslider3.274ab3fd.webp&w=1080&q=75" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://www.vakilkaro.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fslider4.629cb01b.webp&w=1080&q=75" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      <div className="modal fade" id="enquiryModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5 className="fw-bold">Free Consultation</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <input className="form-control" placeholder="Full Name" />
                </div>
                <div className="col-md-6">
                  <input className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.slice(0, 10))
                    }
                  />
                  {phone.length === 10 && !otpSent && (
                    <button
                      className="btn btn-sm btn-outline-primary mt-2"
                      onClick={handleSendOtp}
                    >
                      Send OTP
                    </button>
                  )}
                  {otpSent && (
                    <input
                      className="form-control mt-2"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  )}
                </div>
                <div className="col-md-6">
                  <select className="form-select">
                    <option>Select Service</option>
                    <option>Trademark</option>
                    <option>Company</option>
                    <option>GST</option>
                  </select>
                </div>
              </div>

              <div className="text-end mt-4">
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
