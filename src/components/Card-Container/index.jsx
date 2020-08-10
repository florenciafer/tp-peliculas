import React from "react";
import Card from "../card";
import { FiArrowRight } from "react-icons/fi";

const CardContainer = () => {
  return (
    <div className="card-container">
      <h1 className="card-container-title">
        Titulo categoria
        <FiArrowRight className="arrow" />
      </h1>
      <div className="card-wrapper">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardContainer;
