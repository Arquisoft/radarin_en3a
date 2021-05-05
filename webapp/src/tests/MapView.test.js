import React from 'react'
import { render } from "@testing-library/react";
import MapView from "../components/map/MapView";
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

test('check that everything is rendering propertly', async () => {
  const locationList = [];
  const webId = 'https://sergioen3a.solidcommunity.net/profile/card#me';

  const session = jest.fn();
  session.info = jest.fn();
  session.info.webId = webId;
  session.fetch = jest.fn();
  const c = render(
    <I18nextProvider i18n={i18n}> // actually give translation to your component
       <MapView locationList={locationList} session={session}/> 
    </I18nextProvider>
 
  );
  //expect(c.getAllByText(i18n.getDataByLanguage('en').translation.MapOfLocations)).toBeInTheDocument();
  
});