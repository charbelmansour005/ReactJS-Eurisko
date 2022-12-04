import React, { useEffect, useState } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  searchByContent,
  incrementPage,
  decrementPage,
} from "../../features/article/articleSlice";
import { fetchArticles } from "../../features/article/articleActions";
import classes from "./Dashboard.module.css";
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  CardActions,
  Card,
  Tooltip,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// components
import DashCardImage from "../../components/DashCardImage/DashCardImage";
import DashCardInfo from "../../components/DashCardInfo/DashCardInfo";
import DashNavLogoutButton from "../../components/DashNavLogoutButton/DashNavLogoutButton";
import DashArticleError from "../../components/DashArticleError/DashArticleError";
import MaterialUISwitch from "../../components/MUITheme/MaterialUISwitch";
import DashCardSkeleton from "../../components/DashCardSkeleton/DashCardSkeleton";
import DashNoSearchRes from "../../components/DashNoSearchRes/DashNoSearchRes";
import DashShareButtons from "../../components/DashShareButtons/DashShareButtons";
import DashNavTooltip from "../../components/DashNavTooltip/DashNavTooltip";
import DashModalView from "../../components/DashModalView/DashModalView";
import DashSearchDivider from "../../components/DashSearchDivider/DashSearchDivider";

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
              <DashSearchDivider />
            </div>
            <DashNavLogoutButton />
            <div className={classes.responsive__navbar}>
              <DashSearchDivider />
            </div>
            <DashNavTooltip />
            <DashSearchDivider />
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
