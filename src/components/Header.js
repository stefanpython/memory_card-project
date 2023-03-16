import { useState, useEffect } from "react";

const Header = (props) => {
  return (
    <div className="score--container">
      <h2>Score: {props.score}</h2>

      <h2>High-Score: {props.highScore}</h2>
    </div>
  );
};

export default Header;
