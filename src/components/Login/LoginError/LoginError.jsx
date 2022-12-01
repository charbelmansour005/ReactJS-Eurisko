import React from "react";
import { useSelector } from "react-redux";
import "./LoginError.css";

const LoginError = () => {
  const { error } = useSelector((state) => state.user);
  return (
    <>
      {error && (
        <div className="error__container">
          <p className="error__message">{error}</p>
        </div>
      )}
    </>
  );
};

export default LoginError;
