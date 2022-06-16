import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Home from "components/Home";
import Onboarding from "components/Onboarding";


const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/onboarding" component={Onboarding} />
    <Redirect to="/" />
  </Switch>
);

export default PrivateRoutes;
