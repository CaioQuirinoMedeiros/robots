import React from 'react';
import Card from './Card';

const CardList = ({robots, clickRobot}) => {
    const cardsArray = robots.map((user, i) => {
        return (
            <Card
                key={Math.floor(Math.random()*10000)}
                id={user.id}
                name={user.name}
                email={user.email}
                clickRobot={clickRobot}
            />
        );
    });
    return (
        <div className="board">
            {cardsArray}
        </div>
    );
};

export default CardList;