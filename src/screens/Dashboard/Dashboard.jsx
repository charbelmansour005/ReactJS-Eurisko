import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchByContent } from "../../features/article/articleSlice";
import { fetchArticles } from "../../features/article/articleActions";
// search input
import classes from "./Dashboard.module.css";
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  Button,
  CardActions,
  Card,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
// sharing
import {
  LinkedinShareButton,
  RedditShareButton,
  RedditIcon,
  LinkedinIcon,
} from "react-share";
import CardImage from "../../components/CardImage/CardImage";
import CardInfo from "../../components/CardInfo/CardInfo";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import MaterialUISwitch from "../../components/MUITheme/MaterialUISwitch";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredArticles = useSelector(
    (state) => state.article.filteredArticles
  );
  const article = useSelector((state) => state.article);
  const theme = useSelector((state) => state.theme);

  // ...javascript state gets lost on reload
  // to NOT avoid that: const userInfo = localStorage.getItem("token")
  const { userInfo } = useSelector((state) => state.user);

  const authRedirect = () => {
    if (!userInfo) {
      navigate("/login");
    } else return;
  };

  useEffect(() => {
    authRedirect();
  }, []);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  useEffect(() => {
    dispatch(searchByContent(searchTerm));
  }, [searchTerm, dispatch]);

  // clear search input
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className={classes.top__center}>
        <Paper
          component="form"
          variant="outlined"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <MaterialUISwitch />
          <Divider sx={{ height: 28 }} orientation="vertical" />
          <LogoutButton />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <SearchIcon sx={{ p: "10px" }} />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Articles"
            inputProps={{ "aria-label": "search articles" }}
            onChange={handleSearchInput}
            value={searchTerm}
          />
          {searchTerm.length ? (
            <IconButton
              sx={{ p: "10px" }}
              aria-label="menu"
              onClick={() => {
                setSearchTerm(``);
              }}
            >
              <ClearIcon />
            </IconButton>
          ) : null}
        </Paper>
      </div>

      <div>
        {article.loading && <p>Loading articles...</p>}
        {article.error && <h2>{article.error}</h2>}
        {filteredArticles.length ? (
          <div className={classes.article__flex}>
            {filteredArticles.map((article, index) => (
              <Card
                key={article._id}
                sx={{ maxWidth: 345, m: 5 }}
                variant="outlined"
              >
                <CardImage />
                <CardInfo article={article} />
                <CardActions>
                  <RedditShareButton
                    url={
                      article.abstract +
                      " Shared from: https://euriskomobility.com/"
                    }
                    quote={"Eurisko News"}
                    style={{ margin: "1px" }}
                  >
                    <RedditIcon size={32} round />
                  </RedditShareButton>
                  <LinkedinShareButton
                    url={
                      article.abstract +
                      " Shared from: https://euriskomobility.com/"
                    }
                    quote={"Eurisko News"}
                    style={{ margin: "1px" }}
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  <Button size="small" href={article.web_url}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        ) : (
          <p>Nothing found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
