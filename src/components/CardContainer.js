import { useEffect, useState } from "react";
import Card from "./Card";
import Data from "../Data";

const CardContainer = (props) => {
  const [data, setData] = useState(Data);

  const shuffle = (newData) => {
    for (let i = newData.length - 1; i > 0; i--) {
      let randomId = Math.floor(Math.random() * i);
      [newData[randomId], newData[i]] = [newData[i], newData[randomId]];
    }
  };

  function handleClick(clickedId) {
    let newData = [...data];
    const clickedCard = newData.find((card) => card.id === clickedId);
    clickedCard.clicked = !clickedCard.clicked;

    setData(newData);
    shuffle(newData);
  }

  useEffect(() => {
    if (props.score === 0) {
      const newData = Data.map((card) => ({ ...card, clicked: false }));
      setData(newData);
    }
  }, [props.score]);

  const imgData = data.map((item) => (
    <Card
      title={item.title}
      imageUrl={item.imageUrl}
      key={item.id}
      id={item.id}
      clicked={item.clicked}
      handleClick={handleClick}
      score={props.onScoreUpdate}
    />
  ));
  return <>{imgData}</>;
};

export default CardContainer;
