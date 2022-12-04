import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import classes from "./DashArticleError.module.css";

const DashArticleError = ({article}) => {
  return (
    <div className={classes.container__div}>
      {article.error && (
        <h2 className={classes.center}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {article.error} — <strong>try again later</strong>
          </Alert>
        </h2>
      )}
    </div>
  );
};

export default DashArticleError;
