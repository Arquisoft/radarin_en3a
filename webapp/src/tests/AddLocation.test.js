import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import AddLocation from "../components/locations/AddLocation";
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

test('check that everything is rendering propertly', async () => {
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
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <AddLocation />
    </I18nextProvider>
  );
  const button = c.getAllByRole("button");
  expect(button).toHaveLength(1);
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.GetCurrentLocation)).toBeDefined();
  fireEvent.click(button[0]); 

});