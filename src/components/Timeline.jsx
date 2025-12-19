
import TimelineImg from "../assets/Images/timeline.jpg";
function Timeline() {

  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Our Journey</h2>
      <p className="timeline-subheading">
        Every Milestone Tells a Story of Resilience, Innovation, And The Trust of Our Clients.<br></br> Here’s a Glimpse of Our Remarkable Journey.
      </p>

      <div className="timeline-container">
        <img src={TimelineImg} alt="Timeline" />
      </div>
    </section>
  );
}

export default Timeline;
