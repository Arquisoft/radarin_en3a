import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import WelcomeNoAuth from "./../components/welcome/WelcomeNoAuth";

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<WelcomeNoAuth/>);
  expect(getByText("RADARIN")).toBeInTheDocument();
});