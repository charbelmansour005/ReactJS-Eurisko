import { CardContent, Typography } from "@mui/material";
import classes from "./DashCardInfo.module.css";

const DashCardInfo = ({ article }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h8" component="div">
        {article.headline.main}
      </Typography>
      <div className={classes.scroller}>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          {article.snippet.length ? (
            article.snippet
          ) : (
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="text.secondary"
              sx={{
                overflowWrap: "break-word",
                whiteSpace: "pre-wrap",
                textAlign: "center",
              }}
            >
              Click on dropdown for Info
            </Typography>
          )}
        </Typography>
      </div>
    </CardContent>
  );
};

export default DashCardInfo;
