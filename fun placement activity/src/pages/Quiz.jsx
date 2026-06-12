import { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "What is 10 + 20?",
      options: ["20", "30", "40", "50"],
      answer: "30",
    },
    {
      question: "What is 5 × 6?",
      options: ["25", "30", "35", "40"],
      answer: "30",
    },
    {
      question: "Which language is used in React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const nextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h1>🎉 Quiz Completed!</h1>
        <h2>Your Score: {score}/{questions.length}</h2>

        <button onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>📚 Aptitude Quiz</h1>

      <h2>{questions[currentQuestion].question}</h2>

      {questions[currentQuestion].options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {option}
          </label>
        </div>
      ))}

      <br />

      <button onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default Quiz;