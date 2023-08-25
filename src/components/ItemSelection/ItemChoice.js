import { Card } from "@mui/material";
import React from "react";

const ItemChoiceStyle={
  height:'80%',
  width:'80%',
  display:'flex',
}

const ItemChoice = (props) => {
  // props=itemData
  const {title} =  props ;
  const {img} =  props ;
  const {price} =  props ;
  return <Card style={ItemChoiceStyle}>11111</Card>;
};

export default ItemChoice;
