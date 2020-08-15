import React from "react";
import { Route } from "react-router-dom";

const Details = () => {
  return (
    <div className="details-hero">
      <div>
        <img
          src="https://img.cinemablend.com/filter:scale/quill/3/1/4/c/7/f/314c7fd0706e2a51166d2aab6d78c868a394641b.jpg?mw=600"
          alt="imagen details"
        />
      </div>

      <div clasName="nav-bar-detail">
        <button className="nav-bar-detail-text">Info</button>
        <button className="nav-bar-detail-text">Reparto</button>
        <button className="nav-bar-detail-text">Videos</button>
        <button className="nav-bar-detail-text">Similares</button>
      </div>
      <Route>info</Route>
    </div>
  );
};

export default Details;
