import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Profile from "./components/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="Profile">
        <Profile />
      </div>
      <App />
    </div>
  </React.StrictMode>
);
