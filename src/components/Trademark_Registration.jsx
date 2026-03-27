import "../Trademark_Registration.css";
import ctaImg from "../assets/Banner.png";
import { FiCheckCircle } from "react-icons/fi";
import { FaUserTie, FaIdCard, FaCogs } from "react-icons/fa";
import consultation from "../assets/Icons/consult1.png";
import varification from "../assets/Icons/verification1.png";
import Execution from "../assets/Icons/Execution1.png";
import delivered from "../assets/Icons/delivered1.png";

const CallToAction = () => {
    return (
        <>
            {/* FIRST BANNER */}
            <section className="trademark_registration-cta-section">
                <div className="trademark_registration-banner">
                    <img src={ctaImg} alt="Banner" />
                </div>
            </section>
         

            {/* VERIFIED PROTOCOL SECTION */}
            <section className="trademark_registration-protocol-section">
                <div className="trademark_registration-protocol-container">

                    <h2>
                        The <span>VakilKaro Verified Protocol</span>
                    </h2>

                    <div className="trademark_registration-protocol-grid">

                        <div className="trademark_registration-card blue">
                            {/* <FaUserTie className="icon" /> */}
                            <img className="icon" src={consultation} alt="" />
                            <h3>Consultation</h3>
                            <p>Talk to a real CA/CS/Vakil, not just a sales agent.</p>
                        </div>

                        <div className="trademark_registration-card red">
                            {/* <FaIdCard className="icon" /> */}
                            <img className="icon" src={varification} alt="" />

                            <h3>Verification</h3>
                            <p>Documents are double-checked for zero-error filing.</p>
                        </div>

                        <div className="trademark_registration-card purple">
                            {/* <FaCogs className="icon" /> */}
                            <img className="icon" src={Execution} alt="" />

                            <h3>Execution</h3>
                            <p>Real-time Gov Application Tracking</p>
                        </div>

                        <div className="trademark_registration-card orange">
                            {/* <FiCheckCircle className="icon" /> */}
                            <img className="icon" src={delivered} alt="" />
                            <h3>Delivery</h3>
                            <p>Receive your certificates plus a post-compliance roadmap.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToAction;