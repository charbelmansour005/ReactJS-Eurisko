import { Fragment } from "react";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import classes from "./LoginTextFields.module.css";

const LoginTextFields = ({ handleUsernameChange, handlePasswordChange }) => {
  const { error } = useSelector((state) => state.user);

  return (
    <Fragment>
      <TextField
        id="username"
        label="Username"
        variant="filled"
        sx={{ mb: 2, color: "black" }}
        name="username"
        autoFocus
        required
        margin="normal"
        onChange={handleUsernameChange}
        error={error ? true : false}
        className={classes.InputMobile}
      />
      <TextField
        id="filled-basic"
        label="Password"
        variant="filled"
        sx={{ mb: 2, color: "black" }}
        type="password"
        required
        margin="normal"
        onChange={handlePasswordChange}
        error={error ? true : false}
        className={classes.InputMobile}
      />
    </Fragment>
  );
};

export default LoginTextFields;
