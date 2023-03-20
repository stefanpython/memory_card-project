import { useState, useEffect } from "react";

const Card = (props) => {
  const handleChange = () => {
    props.handleClick(props.id);
    props.score(props.clicked);
    console.log(props.clicked, props.id);
  };

  return (
    <div className="card--container">
      <div className="card--inner">
        <img onClick={handleChange} src={props.imageUrl} alt="" />
      </div>

      <p className="card--title">{props.title}</p>
    </div>
  );
};

export default Card;
