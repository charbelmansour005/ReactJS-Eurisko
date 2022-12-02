import React from "react";
import classes from "./Page404.module.css";
import ErrorLinks from "../../components/ErrorLinks/ErrorLinks";
import { Paper } from "@mui/material";
import { color, variant, chosenClassName } from "../../helpers/randomizer";
import Copyright from "../../components/Copyright/Copyright";

const NotFound = () => {
  return (
    <div className={classes.centered}>
      <Paper variant={variant} sx={{ display: "grid", padding: "5vw" }}>
        <h2 style={{ color, textAlign: "center" }}>404 - Page Not Found</h2>
        <p className={chosenClassName}>
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
        <ErrorLinks />
        <Copyright />
      </Paper>
    </div>
  );
};

export default NotFound;
