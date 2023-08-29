import { Card } from "@mui/material";
import React from "react";

const ItemChoiceStyle={
  height:'600px',
  width:'500px'
}

const ItemChoice = (props) => {
  // props=itemData
  const {title} =  props ;
  const {img} =  props ;
  const {price} =  props ;
  return <Card style={ItemChoiceStyle}>{title}{img}{price}</Card>;
};

export default ItemChoice;
