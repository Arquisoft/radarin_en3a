import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import LocationList from "../components/locations/LocationList";

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<LocationList/>);
  expect(getByText("No locations currently saved on your POD") || getByText("Your locations")).toBeInTheDocument();
});