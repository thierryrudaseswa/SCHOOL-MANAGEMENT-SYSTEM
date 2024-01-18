import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import DarkModeToggle from "./DarkMode/useDarkSide.tsx";

import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <CssBaseline />
      <Router>
      {/* <DarkModeToggle /> */}
        <App />
      </Router>
    </StylesProvider>
  </React.StrictMode>
);
