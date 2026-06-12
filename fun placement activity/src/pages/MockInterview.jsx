import { useState } from "react";

function MockInterview() {
  const questions = [
    "Tell me about yourself.",
    "What are your strengths?",
    "Why should we hire you?",
    "What are your career goals?",
    "Explain your final year project."
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [completed, setCompleted] = useState(false);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h1>🎉 Interview Completed!</h1>
        <p>Great Job! You have completed the mock interview.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎤 Mock Interview</h1>

      <h3>Question {currentQuestion + 1}</h3>

      <p>{questions[currentQuestion]}</p>

      <textarea
        rows="6"
        cols="50"
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br />
      <br />

      <button onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default MockInterview;