import React from "react";
import Alert from "@mui/material/Alert";
import classes from "./NothingFound.module.css";

const NothingFound = () => {
  return (
    <div className={classes.condensed}>
      <Alert severity="info">No articles match your search criteria</Alert>
    </div>
  );
};

export default NothingFound;
