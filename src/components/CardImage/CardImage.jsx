import React, { Fragment } from "react";
import { CardMedia } from "@mui/material";
import { chosenCardImage } from "../../helpers/randomizer";

const CardImage = () => {
  return (
    <Fragment>
      <CardMedia
        component="img"
        height="180"
        image={chosenCardImage}
        alt="green iguana"
      />
    </Fragment>
  );
};

export default CardImage;