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
  Tooltip,
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
import SkeletonCard from "../../components/Skeleton/SkeletonCard";
import ArticleError from "../../components/ArticleError/ArticleError";
import NothingFound from "../../components/NothingFound/NothingFound";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredArticles = useSelector(
    (state) => state.article.filteredArticles
  );
  const article = useSelector((state) => state.article);

  // ...javascript state gets lost on reload
  // to NOT avoid that: const userInfo = localStorage.getItem("userToken")
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

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm(``);
  };

  return (
    <div>
      <div className={classes.top__center}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <MaterialUISwitch />
          <Divider
            sx={{ height: 28, mr: "0.5vw", ml: "0.5vw" }}
            orientation="vertical"
          />
          <LogoutButton />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <SearchIcon sx={{ p: "10px" }} />
          <InputBase
            sx={{ ml: 1, flex: 1, width: "100vw" }}
            placeholder="Search Articles"
            inputProps={{ "aria-label": "search articles" }}
            onChange={handleSearchInput}
            value={searchTerm}
          />
          {searchTerm.length ? (
            <Tooltip title="Clear" placement="right">
              <IconButton
                sx={{ p: "10px" }}
                aria-label="menu"
                onClick={handleClearSearch}
              >
                <ClearIcon />
              </IconButton>
            </Tooltip>
          ) : null}
        </Paper>
      </div>
      <div>
        <SkeletonCard />
        <ArticleError />
        {filteredArticles.length ? (
          <div className={classes.article__flex}>
            {filteredArticles.map((article, index) => (
              <Card key={article._id} sx={{ maxWidth: 345, m: 5 }}>
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        ) : (
          <NothingFound />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
