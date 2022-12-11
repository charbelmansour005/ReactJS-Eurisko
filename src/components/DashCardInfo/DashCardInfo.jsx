import classes from "./DashCardInfo.module.css";
import { CardContent, Typography } from "@mui/material";

const DashCardInfo = ({ article }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h8" component="div">
        {article.headline.main}
      </Typography>
      <div className={classes.Scroller}>
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
              To see more information, try clicking on the corner button!
            </Typography>
          )}
        </Typography>
      </div>
    </CardContent>
  );
};

export default DashCardInfo;
