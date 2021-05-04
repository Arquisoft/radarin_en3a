import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import LocationManager from "../components/locations/LocationManager";
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

test('check that everything is rendering propertly', async () => {
  const locationList = [];
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <LocationManager locationList={locationList} /> 
    </I18nextProvider>
 
  );
  /*
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.YourLocations)).toBeDefined();
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.LocationCount1)).toBeDefined();
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.LocationCount2)).toBeDefined();
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.LocationCoordinates)).toBeDefined();
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.Tag)).toBeDefined();
  expect(c.getAllByText(i18n.getDataByLanguage('en').translation.CreatedAt)).toBeDefined();
  const button = c.getByText(i18n.getDataByLanguage('en').translation.AddCurrentLocation);
  fireEvent.click(button);*/
  
});