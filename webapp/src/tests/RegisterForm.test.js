import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import RegisterForm from "./../components/RegisterForm";

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<RegisterForm/>);
  expect(getByText("Solid Community")).toBeInTheDocument();
}); 