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

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  // OTP Timer
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setOtpSent(true);
      setTimer(30);
    }
  };

  const handleResendOtp = () => {
    setTimer(30);
    setOtp("");
  };

  return (
    <section className="header-section py-5">
      <div className="container">
        <div className="row align-items-center mt-5 pt-5">
          {/* ✅ LEFT COLUMN */}
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-3">
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
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
              <br />
              Made Simple With <span className="highlight">Vakilkaro</span>
            </h1>

            <p className="text-muted">
              Business Registration, Trademark, Taxation, Legal Compliances &
              Legal Services in few clicks.
            </p>

            <div className="row bannerserlist">
              <div className="col-12 col-sm-12 col-md-6">
                <p><i className="fas fa-check-circle"></i> 100% Hassle Free Process</p>
              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <p><i className="fas fa-gavel"></i> Expert Legal Guidance</p>
              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <p><i className="fas fa-bolt"></i> Fast & Affordable Service</p>
              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <p><i className="fas fa-thumbs-up"></i> Over 15K Businesses</p>
              </div>
            </div>
            <a
              className="btn btn-warning  fw-bold  mt-4 px-4 py-2"
              data-bs-toggle="modal"
              data-bs-target="#enquiryModal"
            >
              <i className="fas fa-user-plus"></i> Register your business now
            </a>
            &nbsp; &nbsp;
            <a
              href="https://www.youtube.com/yourchannel" // replace with your channel URL
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger text-white fw-bold mt-4 px-4 py-2"
              title="Subscribe to our YouTube channel for latest updates"
            >
              <i className="fab fa-youtube"></i> Check us on YouTube
            </a>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <div className="header-slider rounded-4 overflow-hidden shadow-lg mt-4 mt-md-0">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                <SwiperSlide>
                  <img src="https://www.vakilkaro.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fslider3.274ab3fd.webp&w=1080&q=75" alt="" className="img-fluid w-100" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://www.vakilkaro.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fslider4.629cb01b.webp&w=1080&q=75" alt="" className="img-fluid w-100" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://www.vakilkaro.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fslider5.12345678.webp&w=1080&q=75" alt="" className="img-fluid w-100" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Bootstrap Modal (Popup Form) */}
      <div
        className="modal fade"
        id="enquiryModal"
        tabIndex="-1"
        aria-labelledby="enquiryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" id="enquiryModalLabel">
                Get Free Consultation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name*</label>
                    <input type="text" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email*</label>
                    <input type="email" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone*</label>
                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.slice(0, 10))}
                      required
                    />

                    {/* OTP Section */}
                    {phone.length === 10 && !otpSent && (
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mt-2"
                        onClick={handleSendOtp}
                      >
                        Send OTP
                      </button>
                    )}

                    {otpSent && (
                      <div className="mt-2">
                        {timer > 0 ? (
                          <p className="small text-muted">
                            Resend OTP in {timer}s
                          </p>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={handleResendOtp}
                          >
                            Resend OTP
                          </button>
                        )}

                        <input
                          type="text"
                          maxLength={6}
                          className="form-control mt-2"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) =>
                            setOtp(e.target.value.replace(/\D/, ""))
                          }
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Service Type*</label>
                    <select
                      className="form-select"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      required
                    >
                      <option value="" disabled hidden>
                        Select Service
                      </option>
                      <option value="trademark">Trademark Registration</option>
                      <option value="company">Company Incorporation</option>
                      <option value="gst">GST Filing</option>
                      <option value="tax">Taxation</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 text-end">
                  <button type="submit" className="btn btn-success px-4">
                    Enquiry Now
                  </button>
                </div>
              </form>
            </div>

            <div className="modal-footer border-0">
              <small className="text-muted">
                *No spam. 15000+ businesses registered with{" "}
                <span className="fw-semibold text-primary">Vakilkaro</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
