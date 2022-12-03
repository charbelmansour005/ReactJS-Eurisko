import React, { Fragment } from "react";
import { Link, Grid } from "@mui/material";
import classes from "./LoginFormLinks.module.css";

const LoginFormLinks = () => {
  return (
    <Fragment>
      <Grid container className={classes.center__div}>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LoginFormLinks;
