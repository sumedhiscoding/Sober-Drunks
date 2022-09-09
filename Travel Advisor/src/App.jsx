import { useEffect, useState } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import PlaceDetails from "./PlaceDetails/PlaceDetails";
import Map from "./Map/Map";
import "./App.css";
import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "../src/api/Index";
function App() {
  const [coordinates, setCoordinates] = useState({});

  const [bounds, setBounds] = useState({});
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%", height: "93%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
