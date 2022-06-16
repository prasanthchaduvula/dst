import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import authApi from "apis/auth";
import InviteModal from "./InviteModal";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Button color="inherit" onClick={handleOpen}>
              INVITE
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              LOGOUT
            </Button>
          </Toolbar>
        </AppBar>
        <InviteModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </Box>
    </>
  );
}