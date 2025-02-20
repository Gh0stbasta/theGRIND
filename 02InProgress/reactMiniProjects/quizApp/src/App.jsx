import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard.jsx";
import Score from "./components/Score.jsx";


function App() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState({});
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=14&difficulty=easy")
      .then((response) => response.json())
      .then((data) => {
        setQuestions([...data.results]);
        console.log(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1 className="headline">THE QUIZ</h1>
      {Object.keys(question).length === 0 ? (
        <div>
          <p>Welcome to the film quiz!</p>
          <button
            className="primary-button"
            onClick={() => setQuestion(questions[questionNumber])}
          >
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
            <Score score={score} />
          <button
            className="primary-button"
            onClick={() => {
              const nextQuestionNumber = questionNumber + 1;
              setQuestionNumber(nextQuestionNumber);
              setQuestion(questions[nextQuestionNumber]);
            }}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
