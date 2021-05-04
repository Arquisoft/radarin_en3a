import React from 'react'
import { render } from "@testing-library/react";
import SignUp from "../components/SignUp";
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<SignUp/>);
  
});  