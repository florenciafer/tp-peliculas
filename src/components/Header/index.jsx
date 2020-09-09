import React from "react";
import Search from "../Search";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <div className="container-header">
      <Search />

      <NavBar />
    </div>
  );
};

export default Header;
