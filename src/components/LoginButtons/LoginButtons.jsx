import React from "react";
import { useSelector } from "react-redux";
import { Button, Link, Grid } from "@mui/material";
import classes from "./LoginButtons.module.css";

const FormButtons = () => {
  const { loading } = useSelector((state) => state.user);
  return (
    <>
      <div className={classes.center__div}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, width: 350 }}
          disabled={loading}
          color="secondary"
        >
          Login
        </Button>
      </div>
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
    </>
  );
};

export default FormButtons;
