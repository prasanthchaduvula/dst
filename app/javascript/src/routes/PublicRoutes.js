import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Signup from "components/Auth/Signup";
import Login from "components/Auth/Login";
import Onboarding from "components/Onboarding";

const PublicRoutes = () => (
  <Switch>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route path="/onboarding" component={Onboarding} />
    <Redirect to="/login"/>
  </Switch>
);

export default PublicRoutes;
