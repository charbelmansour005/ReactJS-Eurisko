import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "http://34.245.213.76:3000";
axios.defaults.headers.post["Content-Type"] = `application/json`;

axios.interceptors.request.use(
  (req) => {
    console.log(req);
    req.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "userToken"
    )}`;
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
