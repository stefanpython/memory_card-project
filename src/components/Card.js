import { useState, useEffect } from "react";

const Card = (props) => {
  return (
    <div className="card--container">
      <div className="card--inner">
        <img onClick={props.randomize} src={props.imageUrl} alt="" />
      </div>

      <p className="card--title">{props.title}</p>
    </div>
  );
};

export default Card;
