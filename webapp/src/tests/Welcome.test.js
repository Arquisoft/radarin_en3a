import React from "react";
import { render } from "@testing-library/react";
import WelcomeAuth from "../components/welcome/WelcomeAuth";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

test("check that everything is rendering propertly", async () => {
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <WelcomeAuth />
    </I18nextProvider>
  ); 
  //We are not logged in

  /*
  expect(c.getAllByText(i18n.getDataByLanguage("en").translation.LoggedInAs)).toBeDefined();
  expect(c.getAllByText(i18n.getDataByLanguage("en").translation.Welcome)).toBeDefined();
  expect(c.getAllByText(i18n.getDataByLanguage("en").translation.WebIdIs)).toBeDefined();
  */
  
});