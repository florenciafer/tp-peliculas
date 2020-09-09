import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const getItems = (current, totalPages, getUrl) => {

  const offset = Number(2);
  const aux = [];

  let lowerLimit = current - offset > 0 ? current - offset : 1;
  //  Limite Inferior  23-2 > 0 ?23-2 =21 :1  


  let upperlimit = totalPages - offset > current ? Number(current) + offset : totalPages;
  //limite superior 1000-2 es mayor 23:25: 1000

  if (upperlimit - current - offset < 0) {
    upperlimit -= lowerLimit + offset - current;
  }
  if (current - lowerLimit - offset < 0) {
    upperlimit += lowerLimit + offset - current;
  }
  for (let indice = lowerLimit; indice <= upperlimit; indice++) {

    aux.push(<Link to={getUrl(indice)}>{indice}</Link>);

  }
  return aux;
}

const Paginado = ({ media, category, page, totalPages }) => {
  const getUrl = (numPage) => {
    return `/${media}/${category}/page/${numPage}`;
  }


  const before = page > 1 ? getUrl(Number(page) - 1) : null;
  // 2 > 2 - 1  = 1 
  const next = page <= totalPages ? getUrl(Number(page) + 1) : null;
  // 2 => 2+1 = 3 :NULL 
  const items = getItems(page, totalPages, getUrl)
  return <div>
    {before && <Link to={before} > <AiOutlineArrowLeft className="arrow-Paginado" />anterior</Link>}
    <h3>{items}</h3>
    {next && <Link to={next}>siguiente<AiOutlineArrowRight className="arrow-Paginado" /></Link>}

  </div>;
};

export default Paginado;
