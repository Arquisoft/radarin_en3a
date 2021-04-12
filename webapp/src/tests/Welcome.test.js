import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import WelcomeAuth from "../components/welcome/WelcomeAuth";

test('check that everything is rendering propertly', async () => {
  const { getByText, getAllByRole } = render(<WelcomeAuth/>);
  const image = getAllByRole('img')
  expect(image).toHaveLength(1); 
  /*const { getByText } = render(<WelcomeAuth/>); 
  expect(getByText("You are logged in as:")).toBeDefined();
  */
});