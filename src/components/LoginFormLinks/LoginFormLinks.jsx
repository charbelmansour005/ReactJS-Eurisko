import { Link, Grid } from "@mui/material";
import classes from "./LoginFormLinks.module.css";

const LoginFormLinks = () => {
  return (
    <Grid container className={classes.center__div}>
      <Grid item xs>
        <div className={classes.resp}>
          <Link variant="body2">Forgot password?</Link>
        </div>
      </Grid>
      <Grid item>
        <div className={classes.resp}>
          <Link variant="body2">{"Don't have an account? Sign Up"}</Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginFormLinks;
