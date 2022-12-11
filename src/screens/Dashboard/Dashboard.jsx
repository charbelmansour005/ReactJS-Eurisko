import React, { useEffect, useState, lazy } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
import { useNavigate } from "react-router-dom";
// redux
import {
  searchByContent,
  incrementPage,
  decrementPage,
} from "../../features/article/articleSlice";
import { fetchArticles } from "../../features/article/articleActions";
import { useDispatch, useSelector } from "react-redux";
// css
import classes from "./Dashboard.module.css";
// mui
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  CardActions,
  Card,
  Tooltip,
  Chip,
  Alert,
} from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// components
import {
  DashModalView,
  DashNavTooltipBtn,
  DashArticleError,
  DashCardImage,
  DashCardInfo,
  DashNavLogoutButton,
  DashCardSkeleton,
  DashShareButtons,
  MaterialUISwitch,
} from "../../components/index";

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
  const { userInfo } = useSelector((state) => state.user);

  const authRedirect = () => {
    if (!userInfo) {
      navigate("/");
    }
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
  const handleRefresh = () => dispatch(fetchArticles());
  const handleClearSearch = () => setSearchTerm(``);
  const handlePageUp = () => dispatch(incrementPage());
  const handlePageDown = () => dispatch(decrementPage());
  const hanldeModalClose = () => setIsActive(false);

  const DashNoSearchRes = () => {
    return (
      <div className={classes.Condensed}>
        <Alert severity="info">Cannot find any articles...</Alert>
      </div>
    );
  };

  const DashSearchDivider = () => (
    <Divider sx={{ height: 28, ml: 0.5, mr: 0.5 }} orientation="vertical" />
  );

  return (
    <PullToRefresh
      onRefresh={handleRefresh}
      className={classes.PulldownRefresh}
    >
      <div>
        <div className={classes.TopCenter}>
          <Paper
            variant="outlined"
            // elevation={3}
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className={classes.ResponsiveNavbar}>
              <MaterialUISwitch />
            </div>
            <div className={classes.ResponsiveNavbar}>
              <DashSearchDivider />
            </div>
            <DashNavLogoutButton tooltip={tooltip} />
            <div className={classes.ResponsiveNavbar}>
              <DashSearchDivider />
            </div>
            <DashNavTooltipBtn tooltip={tooltip} />
            <DashSearchDivider />
            <div className={classes.ResponsiveSearchIcon}>
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
          {article.loading && !article.error && (
            <DashCardSkeleton article={article} />
          )}
          <DashArticleError article={article} />
          {/* article cards */}
          {filteredArticles.length && !article.error ? (
            <div className={classes.ArticleFlex}>
              {filteredArticles.map((article, index) => (
                <Card
                  key={article._id}
                  sx={{ maxWidth: 345, m: 5, width: 400 }}
                  variant="outlined"
                >
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
                  {isActive === index ? (
                    // flip an article card
                    <DashModalView article={article} />
                  ) : (
                    <>
                      <DashCardImage />
                      <DashCardInfo article={article} />
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="horizontal"
                      />
                      <CardActions>
                        <div className={classes.ShareFlex}>
                          <DashShareButtons
                            article={article}
                            tooltip={tooltip}
                          />
                          <Chip
                            label={article.document_type}
                            size="small"
                            variant="outlined"
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
            // if there are no search results
            <DashNoSearchRes />
          )}
        </div>
        <div className={classes.CenterNavigation}>
          {/* disable buttons when necessary */}
          <button
            className={classes.NavButton}
            onClick={handlePageDown}
            disabled={article.page === 0 || searchTerm.length}
          >
            <NavigateBeforeIcon variant="primary" />
          </button>
          <button
            className={classes.NavButton}
            onClick={handlePageUp}
            disabled={article.page === 2 || searchTerm.length}
          >
            <NavigateNextIcon variant="primary" />
          </button>
        </div>
      </div>
    </PullToRefresh>
  );
};

export default Dashboard;
