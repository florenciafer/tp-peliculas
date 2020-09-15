import React from "react";
import { Link } from "react-router-dom";
import Img from "../img";

const Card = ({ img, title, id, media, subtitle }) => {

  return (
    <Link to={`/${media}/${id}/info`} className="card">
      <div className="card-image-container">
        <Img className="card-image"
          src={img}
          alt={title} />
      </div>

      <h3 className="card-title">{title}</h3>
      {subtitle && <h2 className="categoryPreview-title">{subtitle}</h2>}
    </Link>
  );
};
export default Card;
