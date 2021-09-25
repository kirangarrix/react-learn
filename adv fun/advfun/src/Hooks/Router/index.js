import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Error from './Error';
import Person from "./Person";
import IndiVidualPerson from "./IndiVidualPerson";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <Person />
        </Route>
        <Route path="/person/:id" children={<IndiVidualPerson/>}>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
