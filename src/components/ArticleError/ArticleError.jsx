import React, { Fragment } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import classes from "./ArticleError.module.css";
import { useSelector } from "react-redux";

const ArticleError = () => {
  const article = useSelector((state) => state.article);
  return (
    <Fragment>
      {article.error && (
        <h2 className={classes.center}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {article.error} — <strong>try again later</strong>
          </Alert>
        </h2>
      )}
    </Fragment>
  );
};

export default ArticleError;
