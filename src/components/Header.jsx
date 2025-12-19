import React from "react";
import logo from "../assets/vakilkaro.png";
import heroBg from "../assets/hero-bg.png";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faAddressCard,
    faTrademark,
    faPhone,
    faHandshake
} from "@fortawesome/free-solid-svg-icons";



function Header() {
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
    const [menuOpen, setMenuOpen] = useState(false); // NEW CODE: Menu state

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // NEW CODE: Toggle menu
    };
    return (
        <>
            <header className="rk-header">
                <div className="rk-box">

                    {/* Logo */}
                    <div className="rk-left">
                        <img src={logo} alt="logo" className="rk-logo" />
                    </div>
                    {/* NEW CODE: Toggle button */}
                    <i className="ri-menu-line rk-toggle" onClick={toggleMenu}></i>
                    {/* Navigation */}
                    <nav className={`rk-nav ${menuOpen ? "show" : ""}`}> {/* NEW CODE: add show */}
                        <div className="rk-menu-item">
                            <a href="#">About</a>
                        </div>
                        <div className="rk-menu-item">
                            <a href="#">Verified Services</a>
                        </div>
                        <div className="rk-menu-item">
                            <a href="#">Marketplace</a>
                        </div>
                        <div className="rk-menu-item">
                            <a href="#">Learning</a>
                        </div>
                        <div className="rk-menu-item pill-btn">
                            <a href="#">Become Partner</a>
                        </div>
                        <div className="rk-menu-item pill-btn">
                            <a href="#">Contact Us</a>
                        </div>
                    </nav>
                    {/* Right Side */}
                    <div className="rk-right">
                        <div className="rk-search-box">
                            <input
                                type="text"
                                placeholder="Search Services"
                                className="rk-search-input"
                            />
                            <i className="ri-search-line rk-search-icon"></i>
                        </div>
                        <button className="rk-login-btn">Log In</button>
                    </div>
                </div>
            </header>
            <section className="header-section py-5">
                <div className="container hero-section">
                    <div className="row justify-content-center text-center mt-5 pt-5">
                        <div className="col-md-10" data-aos="fade-up">

                            <h4 className="hero-title">
                                Business & Legal Services <br /> Under One Roof
                            </h4>

                            <p className="hero-subtitle">
                                Business Registration, Trademark, Taxation, Legal Compliance &
                                Legal Services in few clicks.
                            </p>

                            <div className="hero-buttons mt-4">
                                <a className="hero-btn primary" >View Services</a>
                                <a className="hero-btn secondary">Hire Experts</a>
                            </div>




                            {/* STATS */}
                            <div className="row hero-stats  align-items-center">
                                <div className="col-md-3">
                                    <h5 className="stats-text">
                                        Over the years, we have delivered some extraordinary results that have been
                                        noticed and appreciated worldwide.
                                    </h5>
                                </div>

                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col">
                                            <div className="stat-box">
                                                <h3>850+</h3>
                                                <p>Projects Delivered</p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="stat-box">
                                                <h3>88%</h3>
                                                <p>Client Retention</p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="stat-box">
                                                <h3>150+</h3>
                                                <p>Our Experts Team</p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="stat-box">
                                                <h3>15+</h3>
                                                <p>Years of Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <br />
            </section>

        </>



    );
}

export default Header;
