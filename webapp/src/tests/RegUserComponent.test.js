import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import RegUserComponent from "../components/admin/RegUserComponent";
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

test('check that everything is rendering propertly with no users', async () => {
  const usersList = [];
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <RegUserComponent usersList={usersList}/> 
    </I18nextProvider>
  );

  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.MessageAdmin)).toBeDefined();
});

test('check that everything is rendering propertly with no users', async () => {
  const usersList = [{webId: 'https://sergioen3a.solidcommunity.net/profile/card#me' }];
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <RegUserComponent usersList={usersList}/> 
    </I18nextProvider>
  );

  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.AdminDelete)).toBeDefined();
  const button = c.getByRole("button");
  fireEvent.click(button);
});