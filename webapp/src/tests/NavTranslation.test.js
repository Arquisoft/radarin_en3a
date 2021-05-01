import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navigation from "../components/navigation/Navigation";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next"

test("check that language is changing", async () => {
  const issuer = "sergioen3a";
  const webId = "https://sergioen3a.solidcommunity.net/profile/card#me";
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <Navigation issuer={issuer} webId = {webId}/>
    </I18nextProvider>
  );
  expect(c.getAllByText(i18n.getDataByLanguage("en").translation.navBarLanguage)).toBeDefined(); 
  const dropdown = c.getByText("Language"); 
  fireEvent.click(dropdown);
  const changeLanguage = c.getByText("Spanish");
  fireEvent.click(changeLanguage);
  expect(c.getAllByText(i18n.getDataByLanguage("es").translation.navBarLanguage)).toBeDefined(); 
  const Spanishdropdown = c.getByText("Idioma");
  fireEvent.click(Spanishdropdown);
  const changeToEnglish = c.getByText("Inglés");
  fireEvent.click(changeToEnglish);
  expect(c.getAllByText(i18n.getDataByLanguage("en").translation.navBarLanguage)).toBeDefined(); 
  expect(c.getAllByText(i18n.getDataByLanguage("en").translation.navBarService)).toBeDefined(); 
  const loginDropdown = c.getByText(i18n.getDataByLanguage("en").translation.navBarService);
  fireEvent.click(loginDropdown);
  const solid = c.getByText(i18n.getDataByLanguage("en").translation.navBarSolid);
  fireEvent.click(solid);
  expect(c.getAllByPlaceholderText(i18n.getDataByLanguage("en").translation.LogInPlaceholder)).toBeDefined(); 
  const button = c.getByText(i18n.getDataByLanguage("en").translation.navBarLogIn);
  fireEvent.click(button);
});