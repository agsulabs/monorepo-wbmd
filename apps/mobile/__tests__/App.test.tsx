/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

jest.mock('@monorepo/api-client', () => ({
  client: {setConfig: jest.fn()},
  appControllerHealth: jest.fn().mockResolvedValue({data: {ok: true}}),
}));

import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(async () => {
    ReactTestRenderer.create(<App />);
    await Promise.resolve();
  });
});
