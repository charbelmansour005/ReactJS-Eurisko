import { Fragment } from "react";
import { Skeleton } from "@mui/material";
import classes from "./DashCardSkeleton.module.css";
import { v4 as uuidv4 } from "uuid";

const DashCardSkeleton = ({ article }) => {
  const n = article.articles.length;
  return (
    <Fragment>
      <div className={classes.skeleton__flex}>
        {[...Array(n)].map(() => (
          <Skeleton
            key={uuidv4()}
            animation="wave"
            variant="rectangular"
            width={340}
            height={400}
            sx={{ m: 6 }}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default DashCardSkeleton;
