import "../Partner.css";

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
         <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
         <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
        </div>

        <div className="col c2">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
          <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
          
        </div>

        <div className="col">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
        </div>
        <div className="col c1">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
        </div>
        <div className="col">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
        </div>

        <div className="col c4">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
          <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
        </div>

        <div className="col c5">
         <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
         <img src="https://randomuser.me/api/portraits/men/11.jpg" className="card big" />
         
        </div>

      </div>
    </section>
  );
};

export default Partner;
