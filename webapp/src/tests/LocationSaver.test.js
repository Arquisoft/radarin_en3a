import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import LocationSaver from "../components/locations/LocationSaver";

test('check that everything is rendering propertly', async () => {
  const { getByText, getAllByRole } = render(<LocationSaver/>);
  const button = getAllByRole('button')
  expect(button).toHaveLength(1);
});