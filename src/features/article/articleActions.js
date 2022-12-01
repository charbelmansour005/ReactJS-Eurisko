import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helpers/url";

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async () => {
    const accessToken = localStorage.getItem("userToken");
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    // const page = useSelector((state) => state.article.page);
    const response = await axios.get(`${BASE_URL}/articles?page=1`, config);
    return response.data.response.docs;
  }
);
