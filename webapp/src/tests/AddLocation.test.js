import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import AddLocation from "../components/locations/AddLocation";

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<AddLocation/>);
  expect(getByText("Get current location")).toBeInTheDocument();
});