import classes from "./DashNavTooltipBtn.module.css";
import { toggleTooltip } from "../../features/tooltip/tooltipSlice";
import { useDispatch } from "react-redux";
import { IconButton, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const DashNavTooltipBtn = ({ tooltip }) => {
  const dispatch = useDispatch();
  const handleToggleTooltip = () => dispatch(toggleTooltip());
  return (
    <div className={classes.ResponsiveTooltip}>
      <Tooltip
        title={tooltip.disabled ? "Enable tooltips" : "Disable tooltips"}
        placement="bottom"
      >
        <IconButton
          sx={{ ml: 2, mr: 2 }}
          onClick={handleToggleTooltip}
          color={tooltip.disabled ? "" : "primary"}
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DashNavTooltipBtn;
