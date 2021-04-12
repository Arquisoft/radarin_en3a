import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import FriendsView from "./../components/friends/FriendsView";

test('check that everything is rendering propertly', async () => {
  const { getByText } = render(<FriendsView/>);
  expect(getByText("Friend list (total 0)")).toBeInTheDocument();
});