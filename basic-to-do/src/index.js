import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Router from "./Router";
import ContextProvider from "./Context";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";

// loads the Icon plugin
UIkit.use(Icons);

ReactDOM.render(
  <ContextProvider>
    <Router />
  </ContextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
