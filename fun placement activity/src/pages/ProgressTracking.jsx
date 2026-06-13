import "../style/ProgressTracking.css";

function ProgressTracking() {
  const modules = [
    { name: "Quiz Module", progress: 100 },
    { name: "Mock Interview", progress: 100 },
    { name: "Daily Challenge", progress: 80 },
    { name: "Resume Builder", progress: 90 },
  ];


  return (
    <div className="progress-container">
      <h1 className="progress-title">📈 Progress Tracking</h1>

      <div className="progress-grid">
        {modules.map((module, index) => (
          <div className="progress-card" key={index}>
            <h3>{module.name}</h3>

            <p>{module.progress}% Completed</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressTracking;