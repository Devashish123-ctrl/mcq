import React from 'react';

const Score = ({ score, total }) => {
  return (
    <div>
      <h2   text-align ="center">Your Score: {score} / {total}</h2>
    </div>
  );
};

export default Score;
