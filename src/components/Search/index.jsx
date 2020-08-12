import React from "react";
import { BsSearch } from "react-icons/bs";


const Search = () => {
  return (
    <div className="search-bar">
      <BsSearch className="search-magnifying-glass" />
      <input className="search-input" type="text" placeholder="busqueda"></input>

    </div>
  );
};

export default Search;
