import React from "react";
import classes from "./NotFound.module.css";
import ErrorLinks from "../../components/ErrorLinks/ErrorLinks";
import { Paper } from "@mui/material";

const NotFound = () => {
  const colors = ["darkgreen", "black", "purple", "darkorange", "gray"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const color = randomColor;

  const classNames = [classes.body_1, classes.body_2, classes.body_3];
  const randomClass = classNames[Math.floor(Math.random() * 3)];
  const chosenClassName = randomClass;

  return (
    <div className={classes.centered}>
      <Paper variant="outlined" sx={{ display: "grid", padding: "5vw" }}>
        <h2 style={{ color, textAlign: "center" }}>404 - Page Not Found</h2>
        <p className={chosenClassName}>
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
        <ErrorLinks />
      </Paper>
    </div>
  );
};

export default NotFound;
