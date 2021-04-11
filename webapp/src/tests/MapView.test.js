import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import MapView from "../components/map/MapView";

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<MapView/>);
  expect(getByText("Map of locations saved for logged user:")).toBeInTheDocument();
});