import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import classes from "./LoginSubmitBtn.module.css";

const LoginSubmitBtn = ({ username, password, handleLogin }) => {
  const { loading } = useSelector((state) => state.user);

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, width: 350 }}
      disabled={loading || (!username.length && !password.length)}
      color="secondary"
      onClick={handleLogin}
      className={classes.ButtonMobile}
    >
      Login
    </Button>
  );
};

export default LoginSubmitBtn;
