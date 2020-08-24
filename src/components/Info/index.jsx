import React from "react";
import useDetail from "../../utils/hooks/useDetail";
import { Link } from "react-router-dom";
import ExternalLinks from "../ExternalLink";

const Info = ({ media, id }) => {
  const [data] = useDetail(media, id)
  console.log(data)
  return (<div>
    {data && <div className="container-info">
      <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt="" className="hero-info" />
      <h1 className="info-title">{data.original_title}</h1>
      <p className="info-rating"></p>
      <p className="info-description">
        {data.overview}
      </p>
      <p className="info-description">Duración:{data.runtime} min</p>
      <ul className="info-description">
        Géneros: {data.genres.map(g => <Link to={`/${media}/${g.name}/${g.id}/page/1`} className="info-genero" key={g.id} > {g.name}</Link>)}</ul>
      <p className="info-description">Presupuesto:{data.budget}</p>
      <p className="info-description">Recaudación:{data.revenue}</p>
      <p className="info-description">Producción:{data.production_companies.map(production => <li className="info-production" key={production.id}>{production.name}</li>)}</p>
      <div> <ExternalLinks media={media} id={id} /></div>
    </div>}
  </div >


  )

};

export default Info;
