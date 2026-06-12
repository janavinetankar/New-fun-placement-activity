import { useState } from "react";

function Feedback() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>💬 Feedback</h1>

      {!submitted ? (
        <>
          <textarea
            rows="6"
            cols="50"
            placeholder="Enter your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <br />
          <br />

          <button onClick={handleSubmit}>
            Submit Feedback
          </button>
        </>
      ) : (
        <h2>✅ Thank You For Your Feedback!</h2>
      )}
    </div>
  );
}

export default Feedback;