import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const getItems = (current, totalPages, getUrl) => {
  console.log(current)
  const offset = 2;
  const aux = [];

  let upperlimit = totalPages - offset > current ? current + offset : totalPages;

  let lowerLimit = current - offset > 0 ? current - offset : 1;
  // 1 -2
  if (upperlimit - current - offset < 0) {
    upperlimit -= lowerLimit + offset - current;
  }
  if (current - lowerLimit - offset < 0) {
    upperlimit += lowerLimit + offset - current;
  }
  for (let indice = lowerLimit; indice <= upperlimit; indice++) {
    // 
    aux.push(<Link to={getUrl(indice)}>{indice}</Link>);

  }
  return aux;
}

const Paginado = ({ media, category, page, totalPages }) => {
  const getUrl = (numPage) => {
    return `/${media}/${category}/page/${numPage}`;
  }


  const before = page > 1 ? getUrl(Number(page) - 1) : null;
  const next = page <= totalPages ? getUrl(Number(page) + 1) : null;
  const items = getItems(page, totalPages, getUrl)
  return <div>
    {before && <Link to={before} > <AiOutlineArrowLeft className="arrow-Paginado" />anterior</Link>}
    <h3>{items}</h3>
    {next && <Link to={next}>siguiente<AiOutlineArrowRight className="arrow-Paginado" /></Link>}

  </div>;
};

export default Paginado;
