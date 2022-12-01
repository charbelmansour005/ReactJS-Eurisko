import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/user/userActions";
// mui & style
import "./LoginScreen.css";
import { Paper, TextField, LinearProgress } from "@mui/material";
import { toast } from "react-toastify";
import FormButtons from "../../components/Login/FormButtons/FormButtons";
import LoginError from "../../components/Login/LoginError/LoginError";

const LoginScreen = () => {
  const { loading, userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      notifySuccess();
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  const mainImages = [
    "https://i.ibb.co/4NjDKsn/removedbg-copy.png",
    "https://i.ibb.co/ZKbYJng/removedbg.png",
  ];
  const randomImage = mainImages[Math.floor(Math.random() * 2)];
  const imageURL = randomImage;

  return (
    <div className="Main__body">
      <Paper
        elevation={3}
        sx={{
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <form onSubmit={handleSubmit(submitForm)}>
          <LoginError />
          <div className="center__div">
            <img className="main__image" src={imageURL} />
          </div>
          <div className="center__div">
            <TextField
              {...register("username")}
              id="username"
              label="Username"
              variant="outlined"
              sx={{ width: 350, mb: 2 }}
              name="username"
              autoFocus
              required
              margin="normal"
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="outlined"
              sx={{ width: 350, mb: 2 }}
              type="password"
              required
              margin="normal"
              {...register("password")}
            />
            <FormButtons />
          </div>
        </form>
        {loading && <LinearProgress />}
      </Paper>
    </div>
  );
};

export default LoginScreen;

const notifySuccess = () =>
  toast.success("Logged in!", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
