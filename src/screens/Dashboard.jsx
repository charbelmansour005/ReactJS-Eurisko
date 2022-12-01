import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchByContent } from "../features/articleSlice";
import { fetchArticles } from "../features/articleSlice";

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

  // ...js state gets lost on reload
  // to NOT use state on reload: const userInfo = localStorage.getItem("token")
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

  return (
    <div>
      Dashboard
      <button onClick={handleLogout}>Logout</button>
      <div>
        {article.error && <h2>{article.error}</h2>}
        <h2>Articles</h2>
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          value={searchTerm}
        />
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
