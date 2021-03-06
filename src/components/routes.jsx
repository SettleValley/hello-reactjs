//Dependecies
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import About from "./about";
import Home from "./home";
import Login from './login';
import Page404 from "./page404";

export const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);
