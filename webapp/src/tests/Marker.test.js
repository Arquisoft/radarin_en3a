import React from 'react'
import { render } from "@testing-library/react";
import MarkerGenerator from "./../components/map/MarkerGenerator";
import { getSolidDataset, getThing, getUrlAll } from '@inrupt/solid-client';

test('check that everything is rendering propertly', async () => {
  const webId = 'https://sergioen3a.solidcommunity.net/profile/card#me';

global.session = jest.fn();
global.session.info = jest.fn();
global.session.info.webId = webId;


const locationList = [];

  const { getByText } = render(<MarkerGenerator locationList={locationList} />);
  expect(getByText("No locations currently saved on your POD")).toBeInTheDocument();
   
});  