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

 const [quizCompleted, setQuizCompleted] = useState(false);

const nextQuestion = () => {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    setQuizCompleted(true);
  }
};
if (quizCompleted) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🎉 Quiz Completed!</h1>
      <h2>Congratulations!</h2>
    </div>
  );
}

  return (
    <div style={{ padding: "30px" }}>
      <h1>📚 Aptitude Quiz</h1>

      <h2>{questions[currentQuestion].question}</h2>

      {questions[currentQuestion].options.map((option, index) => (
        <div key={index}>
          <input type="radio" name="option" />
          {option}
        </div>
      ))}

      <br />

      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default Quiz;