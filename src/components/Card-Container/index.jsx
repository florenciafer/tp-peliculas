import React from "react";
import Card from "../card";
import { FiArrowRight } from "react-icons/fi";

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container">


      <div className="card-wrapper">
        {cards.map((card) => {
          return <Card img={card.poster_path} title={card.original_title} key={card.id} />
        })}
      </div>
    </div>
  );
};

export default CardContainer;
