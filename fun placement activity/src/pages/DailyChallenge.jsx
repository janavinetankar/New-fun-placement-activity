import { useState } from "react";

function DailyChallenge() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="challenge-container">
      <div className="challenge-card">
        <h1>🎯 Daily Challenge</h1>

        <div className="badge">Challenge of the Day</div>

        <h2>JavaScript Challenge</h2>

        <p>
          Write a JavaScript function that reverses a string without using
          built-in reverse() method.
        </p>

        {!completed ? (
          <button
            className="challenge-btn"
            onClick={() => setCompleted(true)}
          >
            Complete Challenge
          </button>
        ) : (
          <div className="success-box">
            ✅ Challenge Completed Successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyChallenge;