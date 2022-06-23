import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "@vime/core/themes/default.css";
import "@vime/core/themes/light.css";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
