import "../Trademark_Registration.css";
import { FiArrowUpRight } from "react-icons/fi";
import ctaImg from "../assets/call_to_action.png";

const CallToAction = () => {
    return (

     <section className="trademark_registration-cta-section">
    <div className="trademark_registration-cta-inner">

        <div className="trademark_registration-cta-content">
            <h2>
                Expert Advice,<br />
                <span>Just a Call Away</span>
            </h2>

            <p>
                Get immediate answers to your legal questions from our top-tier team.
            </p>

            <div className="trademark_registration-cta-buttons">
                <button className="trademark_registration-btn primary">Call Us</button>

                <button className="trademark_registration-btn outline">
                    Whatsapp <FiArrowUpRight />
                </button>
            </div>
        </div>

        <div className="trademark_registration-cta-image">
            <img src={ctaImg} alt="Expert Support" />
        </div>

    </div>
</section>
    );
};

export default CallToAction;
