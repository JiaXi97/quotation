import React from "react";
import { Card, Grid, Modal } from "@mui/material";
import ItemChoice from "./ItemChoice";

const ItemScreenStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
};

const ItemCardStyle = {
  marginTop: "30px",
  height: "calc(95% - 30px)",
  width: "100%",
  display: "flex",
  alignItem: "center",
  displayItem: "center",
};

const itemData = [
  { category: "electrical", title: "lights", img: "", price: "1" },
  { category: "plumbing", title: "water", img: "2", price: "1" },
  { category: "windows", title: "lights", img: "", price: "1" },
  { category: "others", title: "water", img: "2", price: "1" },
];

const categories = ["electrical", "plumbing", "windows", "others"];

const ItemPage = (props) => {
  // sort out each category

  return (
    <Card style={ItemCardStyle}>
      <Grid container>
        {itemData.map((data) => (
          <Grid item>
            <ItemChoice title={data.title} img={data.img} price={data.price} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default ItemPage;
