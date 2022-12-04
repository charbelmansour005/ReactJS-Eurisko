import Alert from "@mui/material/Alert";
import classes from "./DashArticleError.module.css";

const DashArticleError = ({ article }) => {
  return (
    <div className={classes.container__div}>
      {article.error && (
        <div className={classes.center}>
          <Alert severity="error">
            {article.error} —
            <strong>
              {article.error === "Network Error"
                ? " Please make sure you have a stable internet connection"
                : "There was an error"}
            </strong>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default DashArticleError;
