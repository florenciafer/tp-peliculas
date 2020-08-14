import React from "react";
import Search from "../Search";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <div className="container-header">
      <NavBar />
      <Search />
    </div>
  );
};

export default Header;
