import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  path,
  redirectRoute,
  ...props
}) => {
  const isLoggedIn = !!JSON.parse(localStorage.getItem("DirectShiftsUser"));
  if (!isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: redirectRoute,
          from: props.location,
        }}
      />
    );
  }
  return <Route path={path} component={Component} {...props} />;
};

export default PrivateRoute;