import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@mui/material";
const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const isMobile = useMediaQuery("min-width:600px");
  return (
    <>
      <div
        className=" bg-slate-400"
        style={{ width: "66.5vw", height: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyABfzILhAPWSnxKQxpofxyHadtF-bgac3o" }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={14}
          center={coordinates}
          // // margin={[50, 50, 50, 50]}
          // // onChildClick={""}
          onChange={(e) => {
            console.log(e);
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
            // console.log(coordinates);
          }}
          // // options={""}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
