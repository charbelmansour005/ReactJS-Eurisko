import React from "react";
import { Typography, Divider, Button } from "@mui/material";
import classes from "./DashModalView.module.css";

const DashModalView = ({ article }) => {
  return (
    <React.Fragment>
      {" "}
      <Typography variant="body1" sx={{ m: 2, textAlign: "start" }}>
        {article.source}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ ml: 2, mb: 2, mr: 2, textAlign: "start" }}
      >
        On {article.pub_date.split("T")[0]}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ ml: 2, mb: 2, mr: 2, textAlign: "start" }}
      >
        {article.byline.original == "null" ||
        article.byline.original?.includes("None")
          ? "Unknown Author"
          : article.byline.original}
      </Typography>
      <div
        style={{
          overflow: "auto",
          height: "205px",
          // border: "1px solid lightgray",
          // borderRight: "1px solid lightgray",
          padding: "3px",
          margin: "10px",
        }}
      >
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{ m: 1, textAlign: "start" }}
        >
          {article.abstract.length > 50 ? (
            article.abstract
          ) : (
            <>
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "gray",
                  border: "1px solid lightgray",
                  borderRadius: "3px",
                  padding: "5px",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "start",
                  }}
                >
                  Please click the button below to see your desired{" "}
                  {article.document_type}.
                </Typography>
              </div>
              <div
                style={{
                  display: "grid",
                  border: "1px solid lightgray",
                  borderRadius: "3px",
                  padding: "5px",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "start",
                  }}
                >
                  {article.type_of_material} material
                </Typography>
              </div>
              <div
                style={{
                  display: "grid",
                  border: "1px solid lightgray",
                  borderRadius: "3px",
                  padding: "5px",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "start",
                  }}
                >
                  {article.word_count === 0
                    ? `Imagery/Audio`
                    : `${article.word_count} word count`}
                </Typography>
              </div>
              <div
                style={{
                  display: "grid",
                  border: "1px solid lightgray",
                  borderRadius: "3px",
                  padding: "5px",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "start",
                  }}
                >
                  {article.section_name
                    ? `Section: ${article.section_name}`
                    : `Unspecified section`}
                </Typography>
              </div>
            </>
          )}
        </Typography>
      </div>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />
      <div className={classes.grid__button}>
        <Button
          sx={{ m: 2 }}
          size="small"
          variant="contained"
          href={article.web_url}
        >
          {`View ${article.document_type} on nypost`}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default DashModalView;
