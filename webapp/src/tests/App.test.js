import React from 'react'
import { render } from "@testing-library/react";
import App from "./../App";


test('check that everything is rendering propertly', async () => {
  const c = render(
    <App />
  );
});