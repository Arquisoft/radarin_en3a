import React from "react";
import { render } from "@testing-library/react";
import SingUp from "./../components/SignUp";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";


test("check that everything is rendering propertly", async () => {
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
    <SingUp /> 
    </I18nextProvider>
  );
});