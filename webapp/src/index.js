import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import { SessionProvider } from "@inrupt/solid-ui-react";

ReactDOM.render(
    <SessionProvider sessionId="solid-radarin">
        <App />
    </SessionProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
