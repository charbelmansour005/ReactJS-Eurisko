import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/userActions";
import { useEffect } from "react";

const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <h1>{error}</h1>}
      <div className="form-group">
        <label htmlFor="text">Username</label>
        <input
          type="text"
          className="form-input"
          {...register("username")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-input"
          {...register("password")}
          required
        />
      </div>
      <button type="submit" className="button" disabled={loading}>
        Login
      </button>
    </form>
  );
};

export default LoginScreen;
