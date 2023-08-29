import React, { useState } from "react";
import { Button } from "@mui/material";
import ItemPage from "../ItemSelection/ItemPage";
import NavigationBar from "./NavigationBar";

const MainPage = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <ItemPage />
    </div>
  );
};

export default MainPage;
