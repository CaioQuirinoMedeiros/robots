import React from "react";

const Detail = ({ user }) => {
  const { id, name, email, adress, phone } = user;
  const detail = (
    <div className="detail">
      <img
        className="card-img"
        alt="foto-robo"
        src={`https://robohash.org/robo-${id}?200x200`}
      />
      <div className="card-info">
        <p>{name}</p>
        <p>{email}</p>
        <p>{adress}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
  return Object.keys(user).length ? detail : <div></div>
};

export default Detail;
