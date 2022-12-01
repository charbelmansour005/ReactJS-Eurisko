import React, { Fragment } from "react";
import { useRoutes } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import Dashboard from "../screens/Dashboard/Dashboard";
import NotFound from "../screens/NotFound/NotFound";

export const RoutesAsObj = () => {
  let element = useRoutes([
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/login", element: <LoginScreen /> },
    { path: "*", element: <NotFound /> },
  ]);
  return <Fragment>{element}</Fragment>;
};
