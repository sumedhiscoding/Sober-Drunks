import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@mui/material";
const Map = () => {
  const isMobile = useMediaQuery("min-width:600px");
  const coords = { lat: 12, lng: 15 };

  return (
    <>
      <div
        className=" bg-slate-400"
        style={{ width: "66.5vw", height: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyABfzILhAPWSnxKQxpofxyHadtF-bgac3o" }}
          defaultCenter={coords}
          defaultZoom={8}
          center={coords}
          // // margin={[50, 50, 50, 50]}
          // // onChildClick={""}
          // // onChange={""}
          // // options={""}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
