jest.mock('../../../api/github');

import * as React from 'react';
import { App } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const app = create(
    <App />
  ).toJSON();
  expect(app).toMatchSnapshot();
});