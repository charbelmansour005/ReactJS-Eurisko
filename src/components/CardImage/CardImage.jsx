import React, { Fragment } from "react";
import { CardMedia } from "@mui/material";
import headerimg from "../../assets/485887.jpeg";

const CardImage = () => {
  return (
    <Fragment>
      <CardMedia
        component="img"
        height="180"
        image={headerimg}
        alt="green iguana"
      />
    </Fragment>
  );
};

export default CardImage;
