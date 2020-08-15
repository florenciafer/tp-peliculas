import React from "react";
import { Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Info from "../Info";
import Reparto from "../Reparto";
import Videos from "../Videos";
import Similares from "../Similares";
import Season from "../season/Season";

const Details = () => {

  let { path, url } = useRouteMatch();
  const { media } = useParams();
  const seleccionDetail = media === "movie" ? { url: "videos", title: "VIDEOS", path: <Videos></Videos> } : { url: "season", title: "EPISODIOS", path: <Season></Season> };


  return (
    <div className="details-hero">
      <div>
        <img
          src="https://img.cinemablend.com/filter:scale/quill/3/1/4/c/7/f/314c7fd0706e2a51166d2aab6d78c868a394641b.jpg?mw=600"
          alt="imagen details"
        />
      </div>
      <div clasName="nav-bar-detail">
        <Link to={`${url}/info`} className="nav-bar-detail-text">Info</Link>
        <Link to={`${url}/cast`} className="nav-bar-detail-text">Reparto</Link>
        <Link to={`${url}/${seleccionDetail.url}`} className="nav-bar-detail-text">{seleccionDetail.title}</Link>
        <Link to={`${url}/similares`} className="nav-bar-detail-text">Similares</Link>
      </div>
      <Route path={`${path}/info`}><Info></Info></Route>
      <Route path={`${path}/cast`}><Reparto></Reparto></Route>
      <Route path={`${path}/${seleccionDetail.url}`}>{seleccionDetail.path}</Route>
      <Route path={`${path}/similares`}><Similares></Similares></Route>
    </div>
  );

};

export default Details;
