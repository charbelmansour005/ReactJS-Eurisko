import { toast } from "react-toastify";

const notifySuccess = () =>
  toast.success("Logged In!", {
    position: "bottom-left",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

export default notifySuccess;
