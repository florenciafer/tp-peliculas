import React, { useState, useEffect } from 'react';
import useGet from "../../utils/hooks/useGet";
import Axios from "axios";
import CardContainer from '../Card-Container';
import { URL_BASE } from "../../constantes/apiConfig";
import { FiArrowRight } from "react-icons/fi";
import useTitle from "../../utils/hooks/useTitle";
import { Link } from 'react-router-dom';




const CategoryPreview = ({ media, category }) => {
    /*   const { media, category, page } = useParams(); */


    const createURL = () => {
        if (category == "trending") {
            return `${URL_BASE}${category}/${media}/week?api_key=${process.env.REACT_APP_API_KEY}`;
        }
        return `${URL_BASE}${media}/${category}?api_key=${process.env.REACT_APP_API_KEY}`;
    }

    const [data, loading, error] = useGet(createURL())
    const title = useTitle(media, category);

    /*   useEffect(() => {
          setIsLoading(true);
          Axios.get(createURL())
              .then((results) => {
                  setData(results.data);
                  console.log(results.data)
                  setIsLoading(false);
              })
              .catch((error) => {
                  setIsError(true);
                  setIsLoading(false);
              })
      }, []); */
    if (loading) {
        return (<h1> cargando...</h1>)
    }
    if (data) {
        return (
            /*   <Link to={`/${media}/${category}/page/1`}>
                  <h1>
                      {media} - {category}
                  </h1>
              </Link> */

            <div>
                <Link to={`/${media}/${category}/page/1`} className="card-container-title">

                    {title}
                    <FiArrowRight className="arrow" />
                </Link>
                <CardContainer cards={data.results.slice(0, 5)} media={media} />
            </div>
        )
    }
    return null;
}



export default CategoryPreview;
