import React from "react";
import classes from "./DashNavTooltip.module.css";
import { toggleTooltip } from "../../features/tooltip/tooltipSlice";
import { useSelector, useDispatch } from "react-redux";
import { IconButton, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const DashNavTooltip = () => {
  const tooltip = useSelector((state) => state.tooltip);
  const dispatch = useDispatch();
  const handleTooltip = () => dispatch(toggleTooltip());
  return (
    <div className={classes.responsive__tooltip}>
      <Tooltip
        title={tooltip.disabled ? "Enable tooltips" : "Disable tooltips"}
        placement="bottom"
      >
        <IconButton
          sx={{ ml: 2, mr: 2 }}
          onClick={handleTooltip}
          color={tooltip.disabled ? "" : "primary"}
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DashNavTooltip;
