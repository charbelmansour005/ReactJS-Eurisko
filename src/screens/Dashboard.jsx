import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const { userInfo } = useSelector((state) => state.user);

  const redirect = () => {
    if (!userInfo) {
      navigate("/login");
    } else return;
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <div>
      Dashboard
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
