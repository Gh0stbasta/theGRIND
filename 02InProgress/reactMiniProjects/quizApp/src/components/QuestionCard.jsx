/* eslint-disable react/prop-types */
const QuestionCard = ({
  question,
  correct_answer,
  incorrect_answers,
  score,
  setScore,
}) => {
  const answers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  const handleAnswerClick = (answer) => {
    if (answer === correct_answer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="question-card">
      <p className="question">{question}</p>
      <div className="answers-container">
        {answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
