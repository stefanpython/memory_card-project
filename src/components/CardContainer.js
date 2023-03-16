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

  function handleClick() {
    const newData = [...data];
    shuffle(newData);
    setData(newData);
  }

  const imgData = data.map((item) => (
    <Card
      randomize={handleClick}
      title={item.title}
      imageUrl={item.imageUrl}
      key={item.id}
      id={item.id}
      clickedItem={item.clicked}
      scoreUpdate={props.onScoreUpdate}
    />
  ));
  return <>{imgData}</>;
};

export default CardContainer;
