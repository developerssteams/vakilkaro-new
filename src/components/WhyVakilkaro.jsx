import { FaUsers, FaUserTie, FaDollarSign, FaHeadset } from "react-icons/fa";


function WhyVakilkaro() {
  return (
    <section className="why-vakilkaro-section">
      <div className="why-container text-center">
        
        {/* LEFT HEADER SECTION */}
        <div className="why-header">
          <h2>Why Vakilkaro?</h2>
          <p >
            Choose Vakilkaro for unmatched legal expertise, premium experience 
            and a strong professional network that ensures your business grows 
            without legal hurdles.
          </p>
        </div>

        {/* 4 CARDS */}
        
        <div className="why-grid">
          <div className="why-card">
            <FaUsers className="why-icon" />
            <h4>LARGEST NETWORK</h4>
            <p>Connect with India’s strongest network of legal, CA & CS experts.</p>
          </div>

          <div className="why-card">
            <FaUserTie className="why-icon" />
            <h4>PROFESSIONAL TEAM</h4>
            <p>100+ verified professionals providing premium and accurate services.</p>
          </div>

          <div className="why-card">
            <FaDollarSign className="why-icon" />
            <h4>BEST PRICE GUARANTEE</h4>
            <p>Premium service quality at the most competitive price.</p>
          </div>

          <div className="why-card">
            <FaHeadset className="why-icon" />
            <h4>24/7 SUPPORT</h4>
            <p>Dedicated WhatsApp support for instant help anytime.</p>
          </div>
        </div>

        {/* CONTACT BOX */}
        <div className="why-contact-box">
          <h3>Need Help or Have Questions?</h3>
          <p>Talk to our experts anytime.</p>

          <div className="why-btns">
            <button className="gold-btn">CALL US</button>
            <button className="outline-btn">WHATSAPP</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyVakilkaro;
