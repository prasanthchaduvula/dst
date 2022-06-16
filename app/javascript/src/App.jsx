import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import Home from "components/Home";
import Onboarding from "components/Onboarding";
import Signup from "components/Auth/Signup";
import Login from "components/Auth/Login";
import PrivateRoute from "common/PrivateRoute";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route path="/onboarding" component={Onboarding} />
        <PrivateRoute path="/" redirectRoute="/login" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;