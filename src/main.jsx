import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Amplify } from "aws-amplify";
import awsConfig from "./aws-config.js";


import "./index.css";
// CONFIGURE AMPLIFY
Amplify.configure(awsConfig);


// START APP
ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>
);