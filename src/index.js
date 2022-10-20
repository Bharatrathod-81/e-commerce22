import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { makeServer } from "./server";
import { ContextProvider } from "./context";
import { BrowserRouter } from "react-router-dom";



// Call make Server
// makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
