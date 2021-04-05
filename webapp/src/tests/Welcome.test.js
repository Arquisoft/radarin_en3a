import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import Welcome from "../components/Welcome";
import RegisterForm from "./../components/RegisterForm";

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<Welcome/>);
  expect(getByText("Hello there!")).toBeInTheDocument();
});