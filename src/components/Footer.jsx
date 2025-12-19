import React from "react";
import "../App.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            {/* White Line Top Border */}
            <div className="footer-divider"></div>

            {/* Footer Main Section */}
            <div className="footer-container">

                {/* Column 1 */}
                <div className="footer-column">
                    <h3>Vakilkaro</h3>
                    <ul>
                        <li><a href="#">About Vakilkaro</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="footer-column">
                    <h3>Platforms</h3>
                    <ul>
                        <li><a href="#">Business Search</a></li>
                        <li><a href="#">Trademark Search</a></li>
                        <li><a href="#">Vakilkaro for UAE</a></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-column">
                    <h3>Usage</h3>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Confidentiality Policy</a></li>
                        <li><a href="#">Disclaimer Policy</a></li>
                        <li><a href="#">Vakilkaro Review</a></li>
                    </ul>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© 2025 Vakilkaro Private Limited. All rights reserved.</p>

                <div className="social-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
