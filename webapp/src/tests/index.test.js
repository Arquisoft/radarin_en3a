import React from "react";
import ReactDOM from "react-dom";
import { SessionProvider } from "@inrupt/solid-ui-react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("test index.js", () => {
    it("should render properly", () => {
        const div = document.createElement("div");
        div.id = "root";
        document.body.appendChild(div);
        require("../index.js");
        expect(ReactDOM.render).toHaveBeenCalledWith(
            <SessionProvider sessionId="solid-radarin">
                <App />
            </SessionProvider>
        , div);
    });
});