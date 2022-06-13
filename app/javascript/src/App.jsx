import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import PublicRoutes from "routes/PublicRoutes";
import PrivateRoutes from "routes/PrivateRoutes";

const App = () => {
  const [loading, setLoading] = useState(true);
  const isLoggedIn = !!JSON.parse(localStorage.getItem("DirectShiftsUser"));

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
      { isLoggedIn ? <PrivateRoutes/> : <PublicRoutes /> }
    </Router>
  );
};

export default App;