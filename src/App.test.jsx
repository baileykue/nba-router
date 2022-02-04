import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { MemoryRouter } from 'react-router-dom';

import App from './App';
import { charData } from './utils/test-data';

const server = setupServer(
  rest.get(
    'https://bobsburgers-api.herokuapp.com/characters',
    (req, res, ctx) => {
      return res(ctx.json(charData));
    }
  )
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('header and  banner loading properly', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(loading);

  const header = screen.getByRole('heading', {
    name: /welcome bob's burgers fans/i,
  });
  const banner = screen.getByRole('banner');
  const bannerText = screen.getByText(/store next door/i);

  expect(header).toBeInTheDocument();
  expect(banner).toBeInTheDocument();
  expect(bannerText).toBeInTheDocument();
});

test('the 25 characters should display on the page', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const charList = await screen.findAllByRole('img');
  expect(charList).toHaveLength(25);
});
