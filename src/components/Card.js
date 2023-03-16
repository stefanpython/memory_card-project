import { useState, useEffect } from "react";

const Card = (props) => {
  const handleClick = () => {
    props.randomize();
    props.scoreUpdate();
  };

  return (
    <div className="card--container">
      <div className="card--inner">
        <img onClick={handleClick} src={props.imageUrl} alt="" />
      </div>

      <p className="card--title">{props.title}</p>
    </div>
  );
};

export default Card;
