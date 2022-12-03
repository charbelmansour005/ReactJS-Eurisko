import React, { Fragment } from "react";
import { useRoutes } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import Dashboard from "../screens/Dashboard/Dashboard";
import Page404 from "../screens/Page404/Page404";

// gives possiblity to switch routes on/off with api calls
export const RoutesAsObj = () => {
  let element = useRoutes([
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/login", element: <LoginScreen /> },
    { path: "*", element: <Page404 /> },
  ]);
  return <Fragment>{element}</Fragment>;
};
