import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="illustration">🚀</div>

        <h1 className="error-code">404</h1>
        <h2 className="title">Oops! Page Not Found</h2>
        <p className="description">
          The page you're looking for doesn't exist or has been moved.
          Let’s get you back on track.
        </p>

        <div className="button-group">
          <button
            className="primary-btn"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
