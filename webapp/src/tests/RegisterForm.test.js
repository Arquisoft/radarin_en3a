import React from "react";
import { render } from "@testing-library/react";
import RegisterForm from "./../components/RegisterForm";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

test("check that everything is rendering propertly", async () => {
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <RegisterForm />
    </I18nextProvider>
  );
  expect(c.getAllByText(i18n.getDataByLanguage("en").translation.registerFormTitle)).toBeDefined();
});  