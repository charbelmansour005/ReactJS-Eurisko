import React from "react";
import Alert from "@mui/material/Alert";
import classes from "./DashNoSearchRes.module.css";

const DashNoSearchRes = () => {
  return (
    <div className={classes.condensed}>
      <Alert severity="info">No articles match your search criteria</Alert>
    </div>
  );
};

export default DashNoSearchRes;
