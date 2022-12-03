import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  searchByContent,
  incrementPage,
  decrementPage,
} from "../../features/article/articleSlice";
import { toggleTooltip } from "../../features/tooltip/tooltipSlice";
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
  Chip,
} from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import InfoIcon from "@mui/icons-material/Info";
// components
import DashCardImage from "../../components/DashCardImage/DashCardImage";
import DashCardInfo from "../../components/DashCardInfo/DashCardInfo";
import DashLogoutButton from "../../components/DashLogoutButton/DashLogoutButton";
import DashArticleError from "../../components/DashArticleError/DashArticleError";
import MaterialUISwitch from "../../components/MUITheme/MaterialUISwitch";
import DashCardSkeleton from "../../components/DashCardSkeleton/DashCardSkeleton";
import DashNoSearchRes from "../../components/DashNoSearchRes/DashNoSearchRes";
import DashShareButtons from "../../components/DashShareButtons/DashShareButtons";
import PullToRefresh from "react-simple-pull-to-refresh";
import DashTooltip from "../../components/DashTooltip/DashTooltip";

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
  const tooltip = useSelector((state) => state.tooltip);
  // ...javascript state gets lost on reload
  // to NOT avoid that: const userInfo = localStorage.getItem("userToken")
  const { userInfo } = useSelector((state) => state.user);

  const authRedirect = () => {
    // console.log(userInfo);
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

  const handleTooltip = () => dispatch(toggleTooltip());
  const handleRefresh = () => dispatch(fetchArticles());
  const handleClearSearch = () => setSearchTerm(``);
  const handlePageUp = () => dispatch(incrementPage());
  const handlePageDown = () => dispatch(decrementPage());
  const hanldeModalClose = () => setIsActive(false);

  return (
    <PullToRefresh
      onRefresh={handleRefresh}
      className={classes.pulldown__refresh}
    >
      <div>
        <div className={classes.top__center}>
          <Paper
            elevation={3}
            // variant="outlined"
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className={classes.responsive__navbar}>
              <MaterialUISwitch />
            </div>
            <div className={classes.responsive__navbar}>
              <Divider
                sx={{ height: 28, mr: "0.5vw", ml: "0.5vw" }}
                orientation="vertical"
              />
            </div>
            <DashLogoutButton />
            <div className={classes.responsive__navbar}>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </div>
            <DashTooltip />
            <Divider
              sx={{ height: 28, ml: 0.5, mr: 0.5 }}
              orientation="vertical"
            />
            <div className={classes.responsive__searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              sx={{ ml: 1, flex: 1, width: "100vw" }}
              placeholder="Search Articles"
              inputProps={{ "aria-label": "search articles" }}
              onChange={handleSearchInput}
              value={searchTerm}
            />
            {searchTerm.length ? (
              <Tooltip
                title="Clear"
                placement="right"
                disableHoverListener={tooltip.disabled}
              >
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
          <DashCardSkeleton />
          <DashArticleError />
          {filteredArticles.length ? (
            <div className={classes.article__flex}>
              {filteredArticles.map((article, index) => (
                <Card
                  key={article._id}
                  sx={{ maxWidth: 345, m: 5, width: 400 }}
                >
                  <>
                    {isActive === index ? (
                      <Tooltip
                        title="Show less"
                        placement="top"
                        disableHoverListener={tooltip.disabled}
                      >
                        <IconButton
                          sx={{ p: "10px", mr: 0, ml: "auto", float: "right" }}
                          aria-label="menu"
                          onClick={hanldeModalClose}
                        >
                          <ExpandLessIcon />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip
                        title="Show more"
                        placement="top"
                        disableHoverListener={tooltip.disabled}
                      >
                        <IconButton
                          sx={{ p: "10px", mr: 0, ml: "auto", float: "right" }}
                          aria-label="menu"
                          onClick={() => setIsActive(index)}
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </>
                  {isActive === index ? (
                    <>
                      <Typography variant="body1" sx={{ m: 2 }}>
                        Published by {article.source}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 2, mb: 2, mr: 2 }}
                      >
                        On {article.pub_date.split("T")[0]}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ m: 2 }}
                      >
                        {article.abstract}
                      </Typography>
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="horizontal"
                      />
                      <div style={{ display: "grid", alignItems: "center" }}>
                        <Button
                          sx={{ m: 2 }}
                          size="small"
                          variant="contained"
                          href={article.web_url}
                        >
                          See on nypost
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <DashCardImage />
                      <DashCardInfo article={article} />
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="horizontal"
                      />
                      <CardActions>
                        <div className={classes.share__flex}>
                          <DashShareButtons article={article} />
                          <Chip
                            label={article.document_type}
                            size="small"
                            sx={{ mb: 0.9, fontSize: 12 }}
                          />
                        </div>
                      </CardActions>
                    </>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <DashNoSearchRes />
          )}
        </div>
        <div className={classes.center__navigation}>
          <button
            className={classes.nav__button}
            onClick={handlePageDown}
            disabled={article.page === 1 || searchTerm.length}
          >
            <NavigateBeforeIcon variant="primary" />
          </button>
          <button
            className={classes.nav__button}
            onClick={handlePageUp}
            disabled={article.page === 2 || searchTerm.length}
          >
            <NavigateNextIcon />
          </button>
        </div>
      </div>
    </PullToRefresh>
  );
};

export default Dashboard;
