import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Typography variant="h3" component="h2">
            Hi Welcome here
          </Typography>
          <Typography variant="subtitle2" component="p" align="center">
           Designed by Prasanth Chaduvula for DirectShifts
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home