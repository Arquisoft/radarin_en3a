import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import NavAuthenticated from "../components/navigation/NavAuthenticated";
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

test('check that language is changing', async () => {

  const mockGeolocation = {
    getCurrentPosition: jest.fn()
      .mockImplementationOnce((success) => Promise.resolve(success({
        coords: {
          latitude: 50,
          longitude: 40
        }
    })))
}; 
global.navigator.geolocation = mockGeolocation;
global.session = jest.fn();

const webId = 'https://sergioen3a.solidcommunity.net/profile/card#me';
  
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <NavAuthenticated webId={webId}/>
    </I18nextProvider>
  );
  expect(c.getByText("Radarin")).toBeInTheDocument();
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.navBarMap)).toBeDefined();
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.navBarLocations)).toBeDefined();  
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.navBarFriends)).toBeDefined(); 
  const dropdown = c.getByText("Language");
  fireEvent.click(dropdown);
  const changeLanguage = c.getByText("Spanish");
  fireEvent.click(changeLanguage);
  expect(c.getAllByText(i18n.getDataByLanguage('es').translation.navBarMap)).toBeDefined(); 
  expect(c.getAllByText(i18n.getDataByLanguage('es').translation.navBarLocations)).toBeDefined(); 
  expect(c.getAllByText(i18n.getDataByLanguage('es').translation.navBarFriends)).toBeDefined(); 
  const Spanishdropdown = c.getByText("Idioma");
  fireEvent.click(Spanishdropdown);
  const changeToEnglish = c.getByText("Inglés");
  fireEvent.click(changeToEnglish);
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.navBarMap)).toBeDefined();
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.navBarLocations)).toBeDefined(); 
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.navBarFriends)).toBeDefined();
  const button = c.getByText(i18n.getDataByLanguage('en').translation.navBarLogOut);
  fireEvent.click(button); 
  const button2 = c.getByAltText("notificacion");
  fireEvent.click(button2);
  fireEvent.click(button2);
});
