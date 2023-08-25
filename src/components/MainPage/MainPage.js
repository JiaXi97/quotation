import React, { useState } from "react";
import ItemChoice from "../ItemSelection/ItemChoice";
import { Button, Modal } from "@mui/material";

const ItemScreenStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
};
const itemData = [{ title: "test1", img: "", price: "1" }];

const MainPage = () => {
  const [itemOverlay, setItemOverlay] = useState(false);
  return (
    <div>
      <Button onClick={() => setItemOverlay(true)}>
        Browse Existing Items
      </Button>
      <Modal
        open={itemOverlay}
        onClose={() => setItemOverlay(false)}
        style={ItemScreenStyle}
      >
        <ItemChoice
          title={itemData[0].title}
          img={itemData[0].img}
          price={itemData[0].price}
        />
      </Modal>
    </div>
  );
};

export default MainPage;
