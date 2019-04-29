import React from "react";

const Card = ({ id, name, email, clickRobot }) => {
  return (
    <div className="card resume" id={id} onClick={clickRobot}>
      <img
        className="card-img"
        alt="foto-robo"
        src={`https://robohash.org/robo-${id}?200x200`}
      />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{email.toLowerCase()}</p>
      </div>
    </div>
  );
};

export default Card;
