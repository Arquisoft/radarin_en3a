import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import FriendPanel from "./../components/friends/FriendPanel";

test('check that everything is rendering propertly', async () => {
  const { getByText, getAllByRole } = render(<FriendPanel/>);
  const image = getAllByRole('img')
  expect(image).toHaveLength(1);
});