import React from "react";
import "../style/NotFound.scss";
const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="titleFound">404</h1>
        <p className="subtitleFound">
          <strong>Not Found</strong>
        </p>
        <p className="subtitleFound">
          The resource requested could no be found on this server
        </p>
        <input
          type="submit"
          value="Go back"
          className="primary-button login-button"
        />
      </div>
    </div>
  );
};

export default RecoveryPassword;
