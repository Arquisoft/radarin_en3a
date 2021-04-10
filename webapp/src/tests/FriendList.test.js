import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import InitialWelcome from "../components/InitialWelcome";
import Welcome from "../components/Welcome";
import RegisterForm from "../components/RegisterForm";
import Navigation from "../components/fragments/Navigation";
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

test('check that everything is rendering propertly', async () => {
  const welcome = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <Welcome />
    </I18nextProvider>
  );
  const initialWelcome = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <InitialWelcome />
    </I18nextProvider>
  );
  const register = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <RegisterForm />
    </I18nextProvider>
  );
  expect(initialWelcome.getByText(i18n.getDataByLanguage('en').translation.InitialWelcomeMessage)).toBeInTheDocument();
  const navigation = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <Navigation />
    </I18nextProvider>
  );
  const login = navigation.getByText("Log in");
  fireEvent.click(login);
  
  const inrupt = register.getByText("Inrupt");
  fireEvent.click(inrupt);

  const items = await welcome.getAllByRole('button')
  expect(items).toHaveLength(5)
});