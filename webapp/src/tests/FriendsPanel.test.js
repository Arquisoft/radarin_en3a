import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import FriendPanel from "./../components/friends/FriendPanel";
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

test('check that everything is rendering propertly', async () => {
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <FriendPanel />
    </I18nextProvider>
  );
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.Profile)).toBeDefined();
});