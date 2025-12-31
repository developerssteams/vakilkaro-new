import "../Journey.css";

const data = [
  { year: "2017", title: "Humble Beginnings\n& Pilot Launch", side: "left", color: "blue" },
  { year: "2018", title: "Early Growth\n& Validation", side: "right", color: "red" },
  { year: "2019", title: "Market\nExpansion", side: "left", color: "purple" },
  { year: "2020", title: "Technology\nScaling", side: "right", color: "green" },
  { year: "2021", title: "Brand\nRecognition", side: "left", color: "orange" },
  { year: "2022", title: "Process\nOptimization", side: "right", color: "cyan" },
  { year: "2023", title: "Strategic\nPartnerships", side: "left", color: "pink" },
  { year: "2024", title: "Global\nReach", side: "right", color: "yellow" },
  { year: "2025", title: "Innovation\nLeadership", side: "left", color: "teal" },
  { year: "2026", title: "Future Ready\nVision", side: "right", color: "red" },
];

const Journey = () => {
  return (
    <section className="journey-wrap">
      {data.map((item, i) => (
        <div key={i} className={`journey-card ${item.side} ${item.color}`}>
          <span className="year">{item.year}</span>

          <div className="content">
            <span className="v-line"></span>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Journey;
