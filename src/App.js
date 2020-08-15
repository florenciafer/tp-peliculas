import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import InfoPage from "./pages/InfoPage";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import Tv from "./pages/tv";
import Category from "./components/Category";


function App() {
  // switch(url)
  // case "/": home
  //Router  url setUrl useState
  // link onClick={setUrl(/)}
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movie" component={Movie}></Route>
        <Route exact path="/tv" component={Tv}></Route>
        <Route exact path="/:media/:category/page/:page"><Category /></Route>

      </Switch>
    </Router>
  );
}

export default App;
