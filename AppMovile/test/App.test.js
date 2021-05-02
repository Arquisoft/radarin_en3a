import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("check that everything is rendering propertly", async() => {
    const getByText  = render( < EmailForm /> );
    expect(getByText(/Radarin/i)).toBeInTheDocument();
    //screen.getByLabelText("Register").toBeInTheDocument();
});