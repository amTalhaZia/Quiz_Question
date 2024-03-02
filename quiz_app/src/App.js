import React, { useState } from "react";
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import Finish from "./Components/Finish";
import { quizContext } from "./Components/Helper/Context";
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)
  const [userName, setUserName] = useState('')


  return (
    <div className="app-container">
      <h1>Quiz App</h1>
      <quizContext.Provider   value={{
         gameState,
         setGameState,
         score,
         setScore,
         userName,
         setUserName
      }}>
        {gameState === "menu" && <Menu />}
        {gameState === "Quiz" && <Quiz />}
        {gameState === "Finish" && <Finish />}
      </quizContext.Provider>
    </div>
  );
}

export default App;
