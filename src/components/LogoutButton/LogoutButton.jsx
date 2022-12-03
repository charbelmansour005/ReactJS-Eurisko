import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Fragment>
      <Button
        sx={{ mr: "3%", ml: "3%" }}
        // variant="contained"
        onClick={handleLogout}
        size="small"
        color="error"
      >
        Logout
      </Button>
    </Fragment>
  );
};

export default LogoutButton;
