import React from "react";
import { render } from "@testing-library/react";
import UserNotification from "../components/navigation/UserNotification";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

test("check that everything is rendering propertly", async () => {
  const amigo = [];
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <UserNotification notif={amigo} /> 
    </I18nextProvider>
  );
  expect(c.getAllByText("No notifications")).toBeDefined();
});