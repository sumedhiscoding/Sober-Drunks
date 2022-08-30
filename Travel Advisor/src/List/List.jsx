import React, { useState } from "react";
import {
  // CicularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
const List = ({ places }) => {
  // ! TYPE AND RATING STATES
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("0");

  // ! PLACES DUMMY  VARIABLE USESTATES

  // const places = [
  //   { name: "cool place" },
  //   { name: "best beer" },
  //   { name: "awesome drink" },
  //   { name: "jhakas dinner" },
  //   { name: "cool place" },
  //   { name: "best beer" },
  //   { name: "awesome drink" },
  //   { name: "jhakas dinner" },
  //   { name: "cool place" },
  //   { name: "best beer" },
  //   { name: "awesome drink" },
  //   { name: "jhakas dinner" },
  //   { name: "cool place" },
  //   { name: "best beer" },
  // ];

  return (
    <div className="flex flex-col">
      <Typography
        className="mx-5 my-1 flex text-3xl align-center"
        variant="h4"
        color="initial"
        sx={{ fontWeight: "fontWeightLight", color: "black" }}
      >
        Restaurants, Hotels & Attractions around you
      </Typography>
      <div className="bg-black h-1 mx-3 my-2"></div>
      <div className="mx-3 my-3">
        <FormControl className="mx-10 mb-5 menu w-56 rounded-box">
          <InputLabel>Type</InputLabel>
          <Select
            className=" px-3"
            variant="standard"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <MenuItem value={"restaurants"} className="text-1xl">
              RESTAURANTS
            </MenuItem>
            <MenuItem value={"hotels"} className="text-1xl">
              HOTELS
            </MenuItem>
            <MenuItem value={"attractions"} className="text-1xl">
              ATTRACTIONS
            </MenuItem>
          </Select>
          {/* <FormHelperText></FormHelperText> */}
        </FormControl>
        <FormControl className="mx-10 mb-5">
          <InputLabel>Type</InputLabel>
          <Select
            className=" px-3"
            variant="standard"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
          {/* <FormHelperText></FormHelperText> */}
        </FormControl>
      </div>
      {/* Cards Section */}
      <Grid container spacing={3} sx={{ height: "75vh", overflow: "auto" }}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
