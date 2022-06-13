import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Signup from "components/Auth/Signup";
import Login from "components/Auth/Login";


const PublicRoutes = () => (
  <Switch>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Redirect to="/login" />
  </Switch>
);

export default PublicRoutes;
