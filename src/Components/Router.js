import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Write from "Screens/Write";
import Settings from "Screens/Settings";
import Home from "Screens/Home";
import Header from "./Header/Header";
import Saved from "Screens/Saved";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/post/:id" exact component={Home} />
      <Route path="/pdetail/:id" exact component={Home} />
      <Route path="/write" exact component={Write} />
      <Route path="/write/:id" exact component={Write} />
      <Route path="/saved" exact component={Saved} />
      <Route path="/sdetail/:id" exact component={Saved} />
      <Route path="/settings" exact component={Settings} />
    </Router>
  );
};
