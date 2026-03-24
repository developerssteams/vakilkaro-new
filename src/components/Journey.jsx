import "../Journey.css";

const data = [
  { year: "2017", title: "Humble Beginnings\n& Pilot Launch", hover: "Started with a small idea 🚀", side: "left", color: "blue" },
  { year: "2018", title: "Expansion & Offcial Incorporation", hover: "First success and validation 📈", side: "right", color: "red" },
  { year: "2019", title: "Crossing the 1 Crore Revenue Mark", hover: "Expanded into new markets 🌍", side: "left", color: "purple" },
  { year: "2020", title: "Expansion & Offcial Incorporation", hover: "Upgraded tech & systems ⚙️", side: "right", color: "green" },
  { year: "2021", title: "Brand\nRecognition", hover: "People started recognizing us ⭐", side: "left", color: "orange" },
  { year: "2022", title: "Process\nOptimization", hover: "Improved internal processes 🔧", side: "right", color: "cyan" },
  { year: "2023", title: "Strategic\nPartnerships", hover: "Collaborations & partnerships 🤝", side: "left", color: "pink" },
  { year: "2024", title: "Global\nReach", hover: "Reached global audience 🌐", side: "right", color: "yellow" },
  { year: "2025", title: "Innovation\nLeadership", hover: "Leading with innovation 💡", side: "left", color: "teal" },
  { year: "2026", title: "Future Ready\nVision", hover: "Ready for the future 🚀", side: "right", color: "red" },
];

const Journey = () => {
  return (
<section className="journey-wrap">

      {/* 🔥 STICKY HEADING */}
      <h6 className="journey-heading">The Vision  That   <br /> Drives Us</h6>

      {data.map((item, i) => (
        <div key={i} className={`journey-card ${item.side} ${item.color}`}>

          <div className="scroll-box">

            {/* DEFAULT */}
            <div className="scroll-content default">
              <span className="year">{item.year}</span>

              <div className="content">
                <span className="v-line"></span>
                <p style={{ whiteSpace: "pre-line" }}>{item.title}</p>
              </div>
            </div>

            {/* HOVER */}
            <div className="scroll-content hover">
              <p className="hover-text">{item.hover}</p>
            </div>

          </div>

        </div>
      ))}
    </section>

  );
};

export default Journey;