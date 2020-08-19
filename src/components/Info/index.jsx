import React from "react";
import useDetail from "../../utils/hooks/useDetail";
import ExternalLinks from '../ExternalLink'

const Info = ({ media, id }) => {
  const [data] = useDetail(media, id)
  console.log(data)
  return (<div>
    {data && <div>
      <img src={`https://image.tmdb.org/t/p/w342${data.backdrop_path}`} alt="" className="hero-info" />
      <h1 className="info-title">{data.original_title}</h1>
      <p className="info-rating"></p>
      <p className="info-description">
        {data.overview}
      </p>
      <p className="info-description">Duracion:{data.runtime} min</p>
      <ul className="info-description">
        Genero: {data.genres.map(g => <li key={g.id}>{g.name}</li>)}</ul>
      <p className="info-description">Presupuesto:{data.budget}</p>
      <p className="info-description">Recaudacion:{data.revenue}</p>
      <p className="info-description">Productions:{data.production_companies.map(production => <li key={production.id}>{production.name}</li>)}</p>
      <div className="info-enlaces">Social media : <ExternalLinks media={media} id={id} /></div>

    </div>}
  </div>


  )

};

export default Info;
