import React from "react";
import classes from "./Page404.module.css";
import { Paper } from "@mui/material";
import { color, variant, chosenClassName } from "../../helpers/randomizer";
// components
import Copyright from "../../components/Copyright/Copyright";
import { Page404ErrorLinks } from "../../components/index";

const Page404 = () => {
  return (
    <div className={classes.centered}>
      <Paper variant={variant} sx={{ display: "grid", padding: "5vw" }}>
        <h2 style={{ color, textAlign: "center" }}>404 - Page Not Found</h2>
        <p className={chosenClassName}>
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
        <Page404ErrorLinks />
        <Copyright />
      </Paper>
    </div>
  );
};

export default Page404;
