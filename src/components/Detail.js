import React from "react";

const Detail = ({ user, closeRobot }) => {
  if (!Object.keys(user).length) return <div />

  const { id, name, email, address, company, phone } = user;

  const detail = (
    <div className="card detail">
      <img
        className="card-img"
        alt="foto-robo"
        src={`https://robohash.org/robo-${id}?200x200`}
      />
      <div className="card-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address.street} {address.suit}, {address.city} - {address.zipcode}  </p>
      </div>
      <div className="card-phrase">
        <p>"{company.catchPhrase}"</p>
      </div>
      <button className="close" onClick={closeRobot}>
        X
      </button>
    </div>
  );
  return detail
};

export default Detail;
