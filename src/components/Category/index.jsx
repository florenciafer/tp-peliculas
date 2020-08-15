import React from "react";
import CardContainer from "../Card-Container";
import { useParams } from "react-router-dom";
import useTitle from "../../utils/hooks/useTitle";
import useGet from "../../utils/hooks/useGet";
import { URL_BASE } from "../../constantes/apiConfig";



const Category = () => {
  const createURL = () => {
    if (category == "trending") {
      return `${URL_BASE}${category}/${media}/week?api_key=${process.env.REACT_APP_API_KEY}`;
    }
    return `${URL_BASE}${media}/${category}?api_key=${process.env.REACT_APP_API_KEY}`;
  }
  const { media, category } = useParams();
  const title = useTitle(media, category);
  const [data, loading, error] = useGet(createURL());

  if (loading) {
    return (<h1> cargando...</h1>)
  }
  if (data) {
    return (

      <div className="category-container">
        <h1 className="card-container-title">{title}</h1>
        <CardContainer className="category" cards={data.results} media={media} />
      </div>
    )
  }
  return null;

}





export default Category;
