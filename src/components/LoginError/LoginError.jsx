import React from "react";
import { useSelector } from "react-redux";
import classes from "./LoginError.module.css";
import Alert from "@mui/material/Alert";

const LoginError = () => {
  const { error } = useSelector((state) => state.user);
  return (
    <>
      {error && (
        <div className={classes.error__container}>
          <Alert severity="error">
            <strong>{error}</strong>
          </Alert>
        </div>
      )}
    </>
  );
};

export default LoginError;
