import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Tajawal",
      textTransform: "none",
    },
  },
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
