import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import InitialWelcome from "./../components/InitialWelcome";

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<InitialWelcome/>);
  expect(getByText("RADARIN")).toBeInTheDocument();
});