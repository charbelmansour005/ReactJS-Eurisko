import "react-toastify/dist/ReactToastify.css";
import { RoutesAsObj } from "./routes/RoutesObj";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <RoutesAsObj />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
