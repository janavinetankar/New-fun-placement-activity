import "../style/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();


  

  const features = [
    { title: "Quiz Module", icon: "📚", path: "/quiz" },
    { title: "Mock Interview", icon: "🎤", path: "/mock-interview" },
    { title: "Resume Builder", icon: "📄", path: "/resume-builder" },
    { title: "Daily Challenge", icon: "🎯", path: "/daily-challenge" },
    { title: "Progress Tracking", icon: "📈", path: "/progress" },
    { title: "Instructions", icon: "📋", path: "/instructions" },
    { title: "Contact", icon: "📞", path: "/contact" },
    { title: "Feedback", icon: "💬", path: "/feedback" },
  ];

  return (
    <div className="dashboard">
      <h1>Fun Placement Activity</h1>
      <p>Welcome Back, Student 👋</p>

      <div className="stats">
  <div className="stat-card">
    <h2>8</h2>
    <p>Total Modules</p>
  </div>

  <div className="stat-card">
    <h2>4</h2>
    <p>Completed</p>
  </div>

  <div className="stat-card">
    <h2>50%</h2>
    <p>Progress</p>
  </div>
</div>

      <div className="card-container">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>

            <button onClick={() => navigate(feature.path)}>
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;