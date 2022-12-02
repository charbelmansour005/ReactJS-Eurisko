import React, { Fragment } from "react";
import { CardContent, Typography } from "@mui/material";
import classes from "./CardInfo.module.css";

const CardInfo = ({ article }) => {
  return (
    <Fragment>
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {article.headline.main}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Published in {article.pub_date.split("T")[0]}
        </Typography>
        <div className={classes.scroller}>
          <Typography gutterBottom variant="body2" component="div">
            {article.abstract}
          </Typography>
        </div>
      </CardContent>
    </Fragment>
  );
};

export default CardInfo;
