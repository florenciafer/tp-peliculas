import React from "react";
import useDetail from "../../utils/hooks/useDetail";
import { Link } from "react-router-dom";
import ExternalLinks from "../ExternalLink";
import Puntaje from "../puntaje";


const Info = ({ media, id }) => {
  const [data] = useDetail(media, id)
  console.log(data)
  return (<div>
    {data && <div className="container-info">
      <div className="container-imgInfo">
        <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt="" className="container-imgInfo" />
      </div>
      <div className="container-textInfo">
        <h1 className="info-title">{data.title || data.name}</h1>
        <div className="info-puntaje" ><Puntaje puntuacion={data.vote_average} /></div>
        <p className="info-description">
          {data.overview}
        </p>
        <p className="info-description">Duración:{data.runtime} min</p>
        <ul className="info-description">
          Géneros: {data.genres.map(g => <Link to={`/${media}/${g.name}/${g.id}/page/1`} className="info-genero" key={g.id} > {g.name}</Link>)}</ul>
        <p className="info-description">Presupuesto:{data.budget ? "$" + data.budget : "$0"}</p>
        <p className="info-description">Recaudación:{data.revenue ? "$" + data.renevue : "$0"}</p>
        <p className="info-description">Producción:{data.production_companies.map((production) => production.name)
          .join(", ")}</p>
        <div> <ExternalLinks media={media} id={id} /></div>
      </div>

    </div>}
  </div >


  )

};

export default Info;
