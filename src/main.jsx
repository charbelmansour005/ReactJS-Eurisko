import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";

// axios middleware - works
// axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
//   "userToken"
// )}`;

axios.interceptors.request.use((config) => {
  console.log(config);

  config.headers["Authorization"] = `Bearer ${localStorage.getItem(
    "userToken"
  )}`;

  return config;
});

axios.interceptors.response.use((response) => {
  // console.log(response)
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
