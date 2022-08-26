import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <>
      <AppBar position="static" className=" bg-stone-800">
        <Toolbar className="flex justify-between ">
          <Typography variant="h5" className="text-3xl">
            Travel Advisor
          </Typography>
          <div className="flex ">
            <Typography className="my-3 text-white">
              Explore New Places
            </Typography>
            {/* <Autocomplete> */}

            <div className="input-group my-3">
              <InputBase
                placeholder="Search"
                className="text-white input input-bordered input-ghost "
              />
              <button className="SearchIcon btn btn-square ">
                <SearchIcon className="text-white " />
              </button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
