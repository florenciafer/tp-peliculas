import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";


const Search = () => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const handleChange = (event) => setValue(event.target.value);
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && value) {
      history.push(`/multi/${value}/page/1`);
    }
  };



  return (
    <div className="search-bar">
      <BsSearch className="search-magnifying-glass" />
      <input className="search-input" type="text" placeholder="busqueda" value={value}
        onChange={handleChange} onKeyDown={handleKeyDown}></input>

    </div>
  );
};

export default Search;
