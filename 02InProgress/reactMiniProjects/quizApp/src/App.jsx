import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard.jsx";
import Score from "./components/Score.jsx";

function App() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState({});
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  function nextQuestion() {
    const nextQuestionNumber = questionNumber + 1;
    setQuestionNumber(nextQuestionNumber);
    setQuestion(questions[nextQuestionNumber]);
  }

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&encode=url3986"
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestions([...data.results]);
        console.log(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  React.useEffect(() => {
    if (!gameOver && Object.keys(question).length !== 0) {
      nextQuestion();
    }
  }, [score]);

  React.useEffect(() => {
    if (questionNumber !== 0 && questionNumber + 1 === questions.length) {
      setGameOver(true);
    }
  }, [questionNumber, questions.length]);

  return (
    <div>
      <h1 className="headline">THE QUIZ</h1>
      {gameOver ? (
        <>
          <p className="scoreboard">Game over. Your score: {score}</p>
          <button
            className="primary-button"
            onClick={() => window.location.reload()}
          >
            New Game
          </button>
        </>
      ) : Object.keys(question).length === 0 ? (
        <div>
          <p className="scoreboard">Welcome to the film quiz!</p>
          <button
            className="primary-button"
            onClick={() => {
              setQuestion(questions[questionNumber]);
              setGameOver(false);
            }}
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
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
          <Score score={score} />
          <button className="primary-button" onClick={() => nextQuestion()}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
