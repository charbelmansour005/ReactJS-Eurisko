import { Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";
import { RoutesAsObj } from "./routes/RoutesObj";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./assets/theme/theme";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";

const App = () => {
  // setting the theme globally
  const theme = useSelector((state) => state.theme);
  return (
    <Fragment>
      <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
        <CssBaseline enableColorScheme />
        <RoutesAsObj />
      </ThemeProvider>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
