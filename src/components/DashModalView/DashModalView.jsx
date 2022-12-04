import React from "react";
import { Typography, Divider, Button } from "@mui/material";
import classes from "./DashModalView.module.css";

const DashModalView = ({ article }) => {
  return (
    <>
      {" "}
      <Typography variant="body1" sx={{ m: 2, textAlign: "start" }}>
        Published by {article.source}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ ml: 2, mb: 2, mr: 2, textAlign: "start" }}
      >
        On {article.pub_date.split("T")[0]}
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        component="div"
        sx={{ m: 2, textAlign: "start" }}
      >
        {article.abstract}
      </Typography>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />
      <div className={classes.grid__button}>
        <Button
          sx={{ m: 2 }}
          size="small"
          variant="contained"
          href={article.web_url}
        >
          {`View ${article.document_type} on nypost`}
        </Button>
      </div>
    </>
  );
};

export default DashModalView;
