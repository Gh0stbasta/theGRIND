/* eslint-disable react/prop-types */
const Score = ({ score }) => {
  return (
    <div className="score-container">
      <p className="score">Current Score: {score}</p>
    </div>
  );
};

export default Score;
