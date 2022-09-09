import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography } from "@mui/material";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

import Rating from "@mui/material/Rating";

import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";
const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const isDesktop = useMediaQuery("min-width:600px");

  return (
    <>
      <div
        className=" bg-slate-400 "
        style={{ width: "66.5vw", height: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyABfzILhAPWSnxKQxpofxyHadtF-bgac3o" }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={14}
          center={coordinates}
          margin={[50, 50, 50, 50]}
          // // onChildClick={""}
          onChange={(e) => {
            console.log(e);
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
            // console.log(coordinates);
          }}
          // // options={""}
        >
          {places?.map((place, i) => (
            <div
              className="containercool"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {isDesktop ? (
                <LocationOnTwoToneIcon color="primary" fontSize="large" />
              ) : (
                <Paper
                  className="w-28 px-3 py-2 flex flex-col
                justify-center align-center"
                >
                  <div className="p-0 text-base">{place.name}</div>
                  <Rating size="small" value={Number(place.rating)} readOnly />
                  <img
                    className="w-16 max-h-24"
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                    class=""
                  />
                </Paper>
              )}
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
