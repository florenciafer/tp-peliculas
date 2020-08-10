import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/detailpage" component={DetailPage}></Route>
        <Route exact path="/infopage" component={InfoPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
