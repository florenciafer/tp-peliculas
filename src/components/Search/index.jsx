import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="busqueda"></input>
      <BsSearch />
    </div>
  );
};

export default Search;
