import "../CallToAction.css";
import { FiArrowUpRight } from "react-icons/fi";
import ctaImg from "../assets/call_to_action.png";

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="cta-inner">

                {/* LEFT CONTENT */}
                <div className="cta-content">
                    <h2>
                        Expert Advice,<br />
                        <span>Just a Call Away</span>
                    </h2>

                    <p>
                        Get immediate answers to your legal questions from our top-tier team.
                    </p>

                    <div className="cta-buttons">
                        <button className="btn primary">Call Us</button>

                        <button className="btn outline">
                            Whatsapp <FiArrowUpRight />
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="cta-image">
                    <img src={ctaImg} alt="Expert Support" />
                </div>

            </div>
        </section>
    );
};

export default CallToAction;
