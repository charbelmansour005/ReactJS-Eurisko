import React from "react";
import classes from "./UnAuthenticated.module.css";
import { Link } from "react-router-dom";

const UnAuthenticated = () => {
  return (
    <div className={classes.Centered}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ color: "white" }}>Unauthorized :(</p>
      </div>
      <p style={{ fontSize: 15, color: "white" }}>
        <Link to="/"> sign in</Link>
      </p>
    </div>
  );
};

export default UnAuthenticated;
