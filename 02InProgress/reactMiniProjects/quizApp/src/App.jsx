import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard.jsx";

function App() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState({});
  const [questionNumber, setQuestionNumber] = useState(0);
  const questions = [];

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=14&difficulty=easy")
      .then((response) => response.json())
      .then((data) => {
        questions.push(...data.results);
        console.log(questions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function getQuestion() {
    if (questions.length > 0) {
      setQuestion(questions[questionNumber]);
      setQuestionNumber(questionNumber + 1);
    }
  }

  return (
    <div>
      <h1>Hello World</h1>
      {Object.keys(question).length === 0 ? (
        <div>
          <p>Welcome to the film quiz!</p>
          <button className="primary-button" onClick={getQuestion}>
            Get first Question
          </button>
        </div>
      ) : (
        <div>
          <QuestionCard
            question={question.question}
            correct_answer={question.correct_answer}
            incorrect_answers={question.incorrect_answers}
            setScore={setScore}
            score={score}
          />
          <button className="primary-button" onClick={getQuestion}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
