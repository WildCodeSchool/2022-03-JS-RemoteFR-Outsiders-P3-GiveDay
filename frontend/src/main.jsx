import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { CurrentPagesContextProvider } from "./PagesContexts";

ReactDOM.render(
  <CookiesProvider>
    <CurrentPagesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentPagesContextProvider>
  </CookiesProvider>,
  document.getElementById("root")
);
