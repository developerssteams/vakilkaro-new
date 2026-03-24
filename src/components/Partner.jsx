import "../Partner.css";
import rectImg1 from "../assets/partner/Rectangle740.png";
import rectImg2 from "../assets/partner/Rectangle741.png";
import rectImg3 from "../assets/partner/Rectangle742.png";
import rectImg4 from "../assets/partner/Rectangle743.png";
import rectImg5 from "../assets/partner/Rectangle744.png";
import rectImg6 from "../assets/partner/Rectangle745.png";
import rectImg7 from "../assets/partner/Rectangle746.png";
import rectImg8 from "../assets/partner/Rectangle747.png";
import rectImg9 from "../assets/partner/Rectangle748.png";
import rectImg10 from "../assets/partner/Rectangle749.png";
import rectImg11 from "../assets/partner/Rectangle750.png";


const Partner = () => {
  return (
    <section className="partner-section">

      {/* ===== TOP TEXT ===== */}
      <div className="partner-hero">
        <h3>Meet Premier</h3>
        <h1>Experts in Law & Finance</h1>
        <p>
          Finding the right advisor shouldn't be a challenge. We have hand-selected 10 of the most
          distinguished CA, CS, and Legal professionals to lead our most critical assignments.
        </p>

        <button className="hero-btnn">
          <span className="btn-text">Direct & Fast</span>
          <span className="btn-icon">↗</span>
        </button>

      </div>

      {/* ===== IMAGE AREA ===== */}
      <div className="partner-wrapper">

        <div className="col c1">
         <img src={rectImg1} className="card big" />
         <img src={rectImg2} className="card big" />
        </div>

        <div className="col c2">
          <img src={rectImg3} className="card big" />
          <img src={rectImg4} className="card big" />
          
        </div>

        <div className="col">
          <img src={rectImg5} className="card big" />
        </div>
        <div className="col c1">
          <img src={rectImg6} className="card big" />
        </div>
        <div className="col">
          <img src={rectImg7} className="card big" />
        </div>

        <div className="col c4">
          <img src={rectImg8} className="card big" />
          <img src={rectImg9} className="card big" />
        </div>

        <div className="col c5">
         <img src={rectImg10} className="card big" />
         <img src={rectImg11} className="card big" />
         
        </div>

      </div>
    </section>
  );
};

export default Partner;
