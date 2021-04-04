import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import EmailForm from "./EmailForm";

test('check that everything is rendering propertly', async () => {
  const { getByText, getByLabelText } = render(<EmailForm/>);
  // expect(getByText("Register")).toBeInTheDocument();
  screen.getByLabelText("Register").toBeInTheDocument();
});