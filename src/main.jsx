import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { UserPorvider } from "./contexts/user.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserPorvider>
        <App />
      </UserPorvider>
    </BrowserRouter>
  </React.StrictMode>
);
