import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@mui/material";

const DashNavLogoutButton = () => {
  const tooltip = useSelector((state) => state.tooltip);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Fragment>
      <Tooltip
        title="Logout"
        placement="bottom"
        disableHoverListener={tooltip.disabled}
      >
        <Button
          sx={{ mr: "3%", ml: "3%" }}
          variant="outlined"
          onClick={handleLogout}
          size="small"
          color="error"
        >
          Logout
        </Button>
      </Tooltip>
    </Fragment>
  );
};

export default DashNavLogoutButton;
