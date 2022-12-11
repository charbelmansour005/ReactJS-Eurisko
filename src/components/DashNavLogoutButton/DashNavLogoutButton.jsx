import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { Tooltip } from "@mui/material";

const DashNavLogoutButton = ({ tooltip }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
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
        color="warning"
      >
        Logout
      </Button>
    </Tooltip>
  );
};

export default DashNavLogoutButton;
