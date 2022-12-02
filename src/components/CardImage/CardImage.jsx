import React from "react";
import { CardMedia } from "@mui/material";
import headerimg from "../../assets/485887.jpeg";

const CardImage = () => {
  return (
    <>
      <CardMedia
        component="img"
        height="180"
        image={headerimg}
        alt="green iguana"
      />
    </>
  );
};

export default CardImage;
