import React from "react";

const Card = ({ id, name, email, clickRobot }) => {
  return (
    <div className="card" id={id} onClick={clickRobot}>
      <img
        className="card-img"
        alt="foto-robo"
        src={`https://robohash.org/robo-${id}?200x200`}
      />
      <div className="card-info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
