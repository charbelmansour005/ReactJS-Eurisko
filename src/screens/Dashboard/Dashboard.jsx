import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  searchByContent,
  incrementPage,
  decrementPage,
} from "../../features/article/articleSlice";
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
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// sharing
import {
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
// components
import CardImage from "../../components/CardImage/CardImage";
import CardInfo from "../../components/CardInfo/CardInfo";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import MaterialUISwitch from "../../components/MUITheme/MaterialUISwitch";
import SkeletonCard from "../../components/Skeleton/SkeletonCard";
import ArticleError from "../../components/ArticleError/ArticleError";
import NothingFound from "../../components/NothingFound/NothingFound";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);
  const filteredArticles = useSelector(
    (state) => state.article.filteredArticles
  );
  const article = useSelector((state) => state.article);
  const page = useSelector((state) => state.article.page);

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
  }, [page]);

  useEffect(() => {
    dispatch(searchByContent(searchTerm));
  }, [searchTerm, dispatch]);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => setSearchTerm(``);

  const handlePageUp = () => {
    dispatch(incrementPage());
  };

  const handlePageDown = () => {
    dispatch(decrementPage());
  };

  const hanldeModalClose = () => setIsActive(false);

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
                  <WhatsappShareButton
                    url={
                      article.abstract +
                      " Shared from: https://euriskomobility.com/"
                    }
                    quote={"Eurisko News"}
                    style={{ margin: "1px" }}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <Button size="small" href={article.web_url}>
                    Full Article
                  </Button>
                </CardActions>
                {isActive === index ? (
                  <Tooltip title="Show less" placement="right">
                    <IconButton
                      sx={{ p: "10px" }}
                      aria-label="menu"
                      onClick={hanldeModalClose}
                    >
                      <ExpandLessIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Show more" placement="right">
                    <IconButton
                      sx={{ p: "10px" }}
                      aria-label="menu"
                      onClick={() => setIsActive(index)}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </Tooltip>
                )}

                {isActive === index && (
                  <>
                    <Typography variant="h6" sx={{ m: 1 }}>
                      {article.source}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ m: 2 }}
                    >
                      {article.abstract}
                    </Typography>
                  </>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <NothingFound />
        )}
      </div>
      <div className={classes.center__navigation}>
        <IconButton
          sx={{ p: "10px" }}
          color="secondary"
          aria-label="menu"
          onClick={handlePageDown}
          disabled={article.page === 1 || searchTerm.length}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          sx={{ p: "10px" }}
          color="secondary"
          aria-label="menu"
          onClick={handlePageUp}
          disabled={article.page === 2 || searchTerm.length}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Dashboard;
