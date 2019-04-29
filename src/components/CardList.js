import React from "react";
import Card from "./Card";

const CardList = ({ robots, clickRobot, activeRobot }) => {
  const cardsArray = robots.map((user, i) => {
    return (
      <Card
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        clickRobot={clickRobot}
        activeRobot={activeRobot}
      />
    );
  });
  return <div className="board">{cardsArray}</div>;
};

export default CardList;
