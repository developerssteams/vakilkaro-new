import "../Partner.css";
import { FiArrowUpRight } from "react-icons/fi";

const Partner = () => {
  return (
    <section className="partner-section">
      <p className="partner-text">
        Finding the right advisor shouldn't be a challenge. We have hand-selected
        10 of the most distinguished CA, CS, and Legal professionals to lead our
        most critical assignments.
      </p>

      <button className="partner-btn">
        Direct & Fast <span><FiArrowUpRight /></span>
      </button>

      <div className="partner-row">

        {/* Col 1 – UP */}
        <div className="col up">
          <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" />
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
        </div>

        {/* Col 2 – DOWN */}
        <div className="col down">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" />
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" />
        </div>

        {/* Col 3 – MORE DOWN (single) */}
        <div className="col more-down single">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
        </div>

        {/* Col 4 – CENTER single */}
        <div className="col center single">
          <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126" />
        </div>


        {/* Col 5 – DOWN */}
        <div className="col down">
          <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" />
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" />
        </div>

        {/* Col 6 – UP */}
        <div className="col up">
          <img src="https://images.unsplash.com/photo-1557862921-37829c790f19" />
          <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c" />
        </div>

      </div>
    </section>
  );
};

export default Partner;
