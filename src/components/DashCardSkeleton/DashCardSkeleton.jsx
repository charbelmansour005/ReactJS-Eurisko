import React, { Fragment } from "react";
import { Skeleton } from "@mui/material";
import classes from "./DashCardSkeleton.module.css";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const DashCardSkeleton = () => {
  const article = useSelector((state) => state.article);
  const n = article.articles.length;
  return (
    <Fragment>
      {article.loading && (
        <div className={classes.skeleton__flex}>
          {[...Array(n)].map(() => (
            <Skeleton
              key={uuidv4()}
              animation="wave"
              variant="rectangular"
              width={340}
              height={400}
              sx={{ m: 10 }}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default DashCardSkeleton;
