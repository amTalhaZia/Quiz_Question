import React, { useContext } from 'react';
import { quizContext } from './Helper/Context';
import { Questions } from './Helper/Question';

const Finish = () => {
  const { score, setScore, userName, setGameState } = useContext(quizContext);

  const restart = () => {
    setScore(0); 
    setGameState('menu')
  };

  return (
    <div className="finish-card">
      <div className="card-content">
        <h2>{userName}</h2>
        <p>{score}/{Questions.length}</p>
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
};

export default Finish;
