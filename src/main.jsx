import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";

// initiate accessToken
let accessToken = localStorage.getItem("userToken");

// using interceptor on get requests - not login
axios.interceptors.request.use((request) => {
  if (accessToken !== null || accessToken !== "" || accessToken !== undefined) {
    request.headers = { Authorization: `Bearer ${accessToken}` };
  }
  return request;
});

axios.interceptors.response.use((response) => {
  return response;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
