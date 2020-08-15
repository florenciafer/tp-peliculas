import React from "react";
import Card from "../card";

const CardContainer = ({ cards, media }) => {
  return (
    <div className="card-container">


      <div className="card-wrapper">
        {cards.map((card) => {
          return <Card img={card.poster_path} title={card.original_title} key={card.id} id={card.id} media={media} />
        })}
      </div>
    </div>
  );
};

export default CardContainer;
