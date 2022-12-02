import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/user/userActions";
import Copyright from "../../components/Copyright/Copyright";
// mui & style
import classes from "./LoginScreen.module.css";
import { Paper, TextField, LinearProgress, Button } from "@mui/material";
import LoginButtons from "../../components/LoginButtons/LoginButtons";
import LoginError from "../../components/LoginError/LoginError";
import { imageURL } from "../../helpers/randomizer";
import notifySuccess from "../../helpers/toasts/SuccessToast";

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
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    dispatch(userLogin({ username, password }));
  };

  return (
    <div className={classes.Main__body}>
      <Paper
        variant="elevation"
        sx={{
          paddingTop: 0,
          paddingBottom: 4,
          width: 550,
        }}
      >
        {loading && <LinearProgress color="secondary" />}
        <form>
          <div className={classes.center__div}>
            <img className={classes.main__image} src={imageURL} />
          </div>
          <LoginError />
          <div className={classes.center__div}>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              sx={{ width: 350, mb: 2, color: "black" }}
              name="username"
              autoFocus
              required
              margin="normal"
              onChange={handleUsernameChange}
              error={error ? true : false}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="outlined"
              sx={{ width: 350, mb: 2, color: "black" }}
              type="password"
              required
              margin="normal"
              onChange={handlePasswordChange}
              error={error ? true : false}
            />
            <div className={classes.center__div}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: 350 }}
                disabled={loading || !username.length || !password.length}
                color="secondary"
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
            <LoginButtons />
            <Copyright />
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default LoginScreen;
