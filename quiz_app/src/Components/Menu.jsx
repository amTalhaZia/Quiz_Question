import React, { useContext } from 'react';
import { quizContext } from './Helper/Context';

const Menu = () => {
  const { gameState, setGameState, userName, setUserName } = useContext(quizContext);

  return (
    <div className="menu-card">
      <div className="menu-container">
        <h1 className="menu-title">Let's start</h1>
        <input
          type="text"
          className="input-field"
          placeholder="Ex. John Smith"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button className="start-button" onClick={() => setGameState('Quiz')}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Menu;
