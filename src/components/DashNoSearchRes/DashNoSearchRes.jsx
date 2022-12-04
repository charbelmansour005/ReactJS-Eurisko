import Alert from "@mui/material/Alert";
import classes from "./DashNoSearchRes.module.css";

const DashNoSearchRes = () => {
  return (
    <div className={classes.condensed}>
      <Alert severity="info">
        If you didn't find what you were looking for, try again!
      </Alert>
    </div>
  );
};

export default DashNoSearchRes;
