import { toast } from "react-toastify";

const notifySuccess = () =>
  toast.success("Logged in", {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export default notifySuccess;
