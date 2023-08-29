import { AppBar } from "@mui/material";
import React from "react";

const AppBarStyle = {
  background: "#8e3026",
  height:30
};

const NavigationBar = () => {
  return <AppBar sx={AppBarStyle}>Navibar</AppBar>;
};

export default NavigationBar;
