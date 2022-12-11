import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { Dashboard, LoginScreen } from "../screens/index";
import { useSelector } from "react-redux";

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
const Page404 = lazy(() =>
  wait(500).then(() => import("../screens/Page404/Page404"))
);
const UnAuthenticated = lazy(() =>
  wait(500).then(() => import("../screens/UnAuthenticated/UnAuthenticated"))
);

// gives possiblity to switch routes on/off with api calls & great for big projects
export const RoutesAsObj = () => {
  const { userInfo } = useSelector((state) => state.user);
  let element = useRoutes([
    {
      path: "/dashboard",
      element: userInfo ? <Dashboard /> : <UnAuthenticated />,
    },
    { path: "/", element: <LoginScreen /> },
    { path: "*", element: <Page404 /> },
  ]);
  return <>{element}</>;
};
