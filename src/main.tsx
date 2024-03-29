import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { StylesProvider } from "@mui/styles";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
  
root.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <CssBaseline />
      <div className="dark:bg-medium bg-orange-700 ">
      <Router>
        <App />
      </Router>
      </div>
    </StylesProvider>
  </React.StrictMode>
);
