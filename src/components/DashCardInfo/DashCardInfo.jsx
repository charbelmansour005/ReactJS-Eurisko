import React, { Fragment } from "react";
import { CardContent, Typography } from "@mui/material";
import classes from "./DashCardInfo.module.css";

const DashCardInfo = ({ article }) => {
  return (
    <Fragment>
      <CardContent>
        <Typography gutterBottom variant="h8" component="div">
          {article.headline.main}
        </Typography>
        <div className={classes.scroller}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              overflowWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {article.snippet}
          </Typography>
        </div>
      </CardContent>
    </Fragment>
  );
};

export default DashCardInfo;
