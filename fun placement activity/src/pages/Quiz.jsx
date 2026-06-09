function Quiz() {
  return (
    <div>
      <h1>📚 Aptitude Quiz</h1>

      <h3>Q1. What is 10 + 20 ?</h3>

      <div>
        <input type="radio" name="q1" /> 20
        <br />
        <input type="radio" name="q1" /> 30
        <br />
        <input type="radio" name="q1" /> 40
        <br />
        <input type="radio" name="q1" /> 50
      </div>

      <br />

      <button>Submit Answer</button>
    </div>
  );
}

export default Quiz;