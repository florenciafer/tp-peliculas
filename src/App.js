import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import Tv from "./pages/tv";
import Category from "./components/Category";
import Details from "./components/Details";
import Person from "./pages/persons/Person";


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movie" component={Movie}></Route>
        <Route exact path="/tv" component={Tv}></Route>
        <Route exact path="/:media/:category/page/:page"><Category /></Route>
        <Route exact path="/:media/:category/:searchParam/page/:page"><Category /></Route>
        <Route path="/person/:id"><Person /></Route>
        <Route path="/:media/:id"><Details /></Route>

      </Switch>

    </Router>
  );
}

export default App;
