import React from "react";
import { render } from "@testing-library/react";
import MarkerGenerator from "./../components/map/MarkerGenerator";

test('check that everything is rendering propertly', async () => {
  const locationList = [];
  const { getByText } = render(<MarkerGenerator locationList={locationList} />);
  expect(getByText("No locations currently saved on your POD")).toBeInTheDocument();
});  