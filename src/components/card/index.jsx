import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title, id, media }) => {
  return (
    <Link to={`/${media}/${id}/info`} className="card">
      <div className="card-image-container">
        <img
          className="card-image"
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${img}`}

          alt={title}
        />
      </div>

      <h1 className="card-title">{title}</h1>
    </Link>
  );
};
export default Card;
