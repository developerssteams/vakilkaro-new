import React, { useState, useEffect } from "react";
import logo from "../assets/vakilkaro.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Header.css";

function Header() {
    const [serviceType, setServiceType] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    // Init AOS
    useEffect(() => {
        AOS.init({ duration: 1200, once: false });
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close menu when clicking outside
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="rk-header">
                <div className="rk-box">
                    {/* Logo */}
                    <div className="rk-left">
                        <img src={logo} alt="logo" className="rk-logo" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="rk-nav-desktop">
                        <div className="rk-menu-item"><a href="#">About</a></div>
                        <div className="rk-menu-item"><a href="#">Verified Services</a></div>
                        <div className="rk-menu-item"><a href="#">Marketplace</a></div>
                        <div className="rk-menu-item"><a href="#">Learning</a></div>
                        <div className="rk-menu-item pill-btn"><a href="#">Become Partner</a></div>
                        <div className="rk-menu-item pill-btn"><a href="#">Contact Us</a></div>
                    </nav>

                    {/* Desktop Right Section */}
                    <div className="rk-right-desktop">
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

                    {/* Mobile Toggle Button */}
                    <div className="rk-toggle" onClick={toggleMenu}>
                        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                    </div>
                </div>

                {/* Mobile Slide Menu */}
                <div className={`rk-mobile-menu ${menuOpen ? "open" : ""}`}>
                    <div className="mobile-menu-content">
                        <div className="mobile-search-box">
                            <input
                                type="text"
                                placeholder="Search Services"
                                className="rk-search-input"
                            />
                            <i className="ri-search-line rk-search-icon"></i>
                        </div>

                        <nav className="rk-nav-mobile">
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>About</a></div>
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Verified Services</a></div>
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Marketplace</a></div>
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Learning</a></div>
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Become Partner</a></div>
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Contact Us</a></div>
                        </nav>

                        <button className="rk-login-btn mobile-login-btn" onClick={closeMenu}>Log In</button>
                    </div>
                </div>

                {/* Overlay for closing menu */}
                {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
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
                            <div className="row hero-stats align-items-center">
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
                                                <p>Projects  <br /> Delivered</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="stat-box">
                                                <h3>88%</h3>
                                                <p>Client <br /> Retention</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="stat-box">
                                                <h3>150+</h3>
                                                <p>Our Experts <br /> Team</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="stat-box">
                                                <h3>15+</h3>
                                                <p>Years of <br /> Experience</p>
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