import React, { Fragment } from "react";
import { Link, Grid } from "@mui/material";

const FormLinks = () => {
  return (
    <Fragment>
      <Grid container>
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

export default FormLinks;
