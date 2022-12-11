import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./LoginError.module.css";
import Alert from "@mui/material/Alert";

const LoginError = () => {
  const { error } = useSelector((state) => state.user);
  return (
    <Fragment>
      {error && (
        <div className={classes.ErrorContainer}>
          <Alert severity="error">
            <strong>{error}</strong>
          </Alert>
        </div>
      )}
    </Fragment>
  );
};

export default LoginError;
