import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import classes from "./DashArticleError.module.css";
import { useSelector } from "react-redux";

const DashArticleError = () => {
  const article = useSelector((state) => state.article);
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
