import { toast } from "react-toastify";

const notifySuccess = () =>
  toast.success("Logged in!", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export default notifySuccess;
