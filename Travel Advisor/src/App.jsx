import { useEffect, useState } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import PlaceDetails from "./PlaceDetails/PlaceDetails";
import Map from "./Map/Map";
import "./App.css";
import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "../src/api/Index";
function App() {
  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);
  const [places, setPlaces] = useState([]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%", height: "93%" }}>
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
