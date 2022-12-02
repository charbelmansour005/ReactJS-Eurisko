import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchByContent } from "../../features/article/articleSlice";
import { fetchArticles } from "../../features/article/articleActions";
// search input
import classes from "./Dashboard.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const filteredArticles = useSelector(
    (state) => state.article.filteredArticles
  );
  const article = useSelector((state) => state.article);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

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
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <SearchIcon sx={{ p: "10px" }} />
          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Articles"
            inputProps={{ "aria-label": "search articles" }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          />
          <IconButton
            sx={{ p: "10px" }}
            aria-label="menu"
            onClick={() => {
              setSearchTerm(``);
            }}
          >
            <ClearIcon />
          </IconButton>
        </Paper>
        <Button
          sx={{ marginLeft: 5 }}
          variant="contained"
          onClick={handleLogout}
          size="small"
        >
          Logout
        </Button>
      </div>

      <div>
        {article.error && <h2>{article.error}</h2>}
        <h2>Articles</h2>
        {filteredArticles.length && (
          <ul>
            {filteredArticles.map((article) => (
              <li key={Math.random()}>{article.abstract}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
