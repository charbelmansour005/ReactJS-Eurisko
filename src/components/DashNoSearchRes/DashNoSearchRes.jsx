import Alert from "@mui/material/Alert";
import classes from "./DashNoSearchRes.module.css";

const DashNoSearchRes = () => {
  return (
    <div className={classes.condensed}>
      <Alert severity="info">Cannot find any articles...</Alert>
    </div>
  );
};

export default DashNoSearchRes;
