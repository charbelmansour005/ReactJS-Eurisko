import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/user/userActions";
// mui & css
import { LinearProgress } from "@mui/material";
import classes from "./LoginScreen.module.css";
// helpers
import { imageURL } from "../../helpers/randomizer";
import notifySuccess from "../../helpers/toasts/SuccessToast";
// components
import {
  Copyright,
  LoginFormLinks,
  LoginError,
  LoginSubmitBtn,
  LoginTextFields,
} from "../../components/index";

const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      notifySuccess();
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => dispatch(userLogin({ username, password }));

  return (
    <div className={classes.Main__body}>
      <form>
        {loading && <LinearProgress color="secondary" />}
        <div className={classes.center__div}>
          <img className={classes.main__image} src={imageURL} />
        </div>
        <LoginError />
        <div className={classes.center__div}>
          <div className={classes.MobileCenter}>
            <LoginTextFields
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
            />
          </div>
          <div className={classes.center__div}>
            <LoginSubmitBtn
              username={username}
              password={password}
              handleLogin={handleLogin}
            />
          </div>
          <LoginFormLinks />
          <Copyright />
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
