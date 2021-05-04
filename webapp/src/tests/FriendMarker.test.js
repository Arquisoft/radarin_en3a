import React from 'react'
import { render } from "@testing-library/react";
import FriendMarkerGenerator from "../components/map/FriendMarkerGenerator";

test('check that everything is rendering propertly', async () => {
  const locationList = [];
  const friendList = [];
  const friendLocationList = [];
  const webId = 'https://sergioen3a.solidcommunity.net/profile/card#me';
  const { getByText } = render(<FriendMarkerGenerator locationList={locationList} friendLocationList={friendLocationList} friendList={friendList} webId={webId}  />);

   
});  