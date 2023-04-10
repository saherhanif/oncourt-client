import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { IntlProvider } from "react-intl";
import translations from "./translations";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IntlProvider messages={translations.he} locale="he">
      <Router>
        <App />
      </Router>
    </IntlProvider>
  </React.StrictMode>
);
