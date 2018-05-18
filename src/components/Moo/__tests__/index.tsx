import * as React from 'react';
import { Moo } from '../';
import { IUser } from '../../../api/github/interfaces.d';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const user: IUser = {
    Name: "Edward D'Amato",
    Location: 'London',
    Bio: 'Moo'
  };
  const moo = create(<Moo user={user} />).toJSON();
  expect(moo).toMatchSnapshot();
});
