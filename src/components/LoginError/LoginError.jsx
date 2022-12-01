import React from "react";
import { useSelector } from "react-redux";
import classes from "./LoginError.module.css";

const LoginError = () => {
  const { error } = useSelector((state) => state.user);
  return (
    <>
      {error && (
        <div className={classes.error__container}>
          <p className={classes.error__message}>{error}</p>
        </div>
      )}
    </>
  );
};

export default LoginError;
