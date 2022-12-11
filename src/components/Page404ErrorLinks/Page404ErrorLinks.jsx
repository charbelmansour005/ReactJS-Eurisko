import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Page404ErrorLinks.module.css";
import { CircularProgress } from "@mui/material";

const Page404ErrorLinks = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    setIsLoading(true);
    navigate("/dashboard");
  };

  const handleLoginRedirect = () => {
    setIsLoading(true);
    navigate("/");
  };

  return (
    <Fragment>
      <a className={classes.LinkStyle} onClick={handleHomeRedirect}>
        {"←"} Go back Home
      </a>
      <a className={classes.LinkStyle} onClick={handleLoginRedirect}>
        {"←"} Login
      </a>

      <div className={classes.LoaderContainer}>
        {isLoading && <CircularProgress />}
      </div>
    </Fragment>
  );
};

export default Page404ErrorLinks;
