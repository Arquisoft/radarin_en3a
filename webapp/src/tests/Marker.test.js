import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import MarkerGenerator from "./../components/map/MarkerGenerator";

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<MarkerGenerator/>);
  expect(getByText("No locations currently saved on your POD") || getByText("Location for time")).toBeInTheDocument();
   
}); 