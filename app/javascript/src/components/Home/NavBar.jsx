import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import authApi from "apis/auth";

export default function Navbar() {

  const handleLogout = (event) => {
    event.preventDefault();
    try {
      authApi.logout();
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.removeItem("DirectShiftsUser");
      window.location.href = "/login";
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DirectShifts
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              LOGOUT
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}