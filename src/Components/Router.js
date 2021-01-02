import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Write from "Screens/Write";
import Settings from "Screens/Settings";
import Header from "./Header/Header";
import Home from "Screens/Home";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/write" exact component={Write} />
      <Route path="/settings" exact component={Settings} />
    </Router>
  );
};
