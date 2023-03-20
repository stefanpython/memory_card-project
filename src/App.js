import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleScoreUpdate = (clicked) => {
    if (!clicked) {
      setScore(score + 1);
    } else {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
    }
  };

  return (
    <div className="App">
      <h1 className="game--title">AventureTime Memory Game</h1>

      <h4 className="app--rules">
        HOW TO PLAY: Click on an image and get points.But don`t click the same
        image twice.
      </h4>

      <Header score={score} highScore={highScore} />

      <div className="app--container">
        <CardContainer score={score} onScoreUpdate={handleScoreUpdate} />
      </div>
    </div>
  );
}

export default App;
