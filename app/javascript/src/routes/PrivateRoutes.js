import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Home from "components/Home";


const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

export default PrivateRoutes;
