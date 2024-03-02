import React, { useContext, useState } from 'react';
import { quizContext } from './Helper/Context';
import { Questions } from './Helper/Question';

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const {  setGameState, score, setScore } = useContext(quizContext);

  const select = (option) => {
    setSelected(option);
  };

  const next = () => {
    const correct = Questions[current].answer;
    if (selected === correct) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  const finish = () => {
    const correct = Questions[current].answer;
    if (selected === correct) {
      setScore(score + 1);
    }
    setGameState('Finish');
  };

  return (
    <div className="quiz">
      <h1 className='heading'>Answer the questions</h1>
      <h3>{Questions[current].prompt}</h3>
      <div className="options">
        <button className={`option ${selected === 'optionA' ? 'selected' : ''}`} onClick={() => select('optionA')}>
          {Questions[current].optionA}
        </button>
        <button className={`option ${selected === 'optionB' ? 'selected' : ''}`} onClick={() => select('optionB')}>
          {Questions[current].optionB}
        </button>
        <button className={`option ${selected === 'optionC' ? 'selected' : ''}`} onClick={() => select('optionC')}>
          {Questions[current].optionC}
        </button>
        <button className={`option ${selected === 'optionD' ? 'selected' : ''}`} onClick={() => select('optionD')}>
          {Questions[current].optionD}
        </button>
      </div>
      <div className="buttons">
        {current === Questions.length - 1 ? (
          <button className="finish-btn" onClick={finish}>Finish</button>
        ) : (
          <button className="next-btn" onClick={next}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
