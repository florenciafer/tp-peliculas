import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="card-image"
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${img}`}

          alt={title}
        />
      </div>

      <h1 className="card-title">{title}</h1>
    </div>
  );
};
export default Card;
