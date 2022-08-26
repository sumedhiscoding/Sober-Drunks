import { useState } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import PlaceDetails from "./PlaceDetails/PlaceDetails";
import Map from "./Map/Map";
import "./App.css";
import { CssBaseline, Grid } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
