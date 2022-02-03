import {
  findByRole,
  findByText,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { MemoryRouter, Route } from 'react-router-dom';

import Home from './Home';
import { charData, epData, storData, pestData } from '../../utils/test-data';

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

test('checks for three random characters', async () => {
  render(
    <MemoryRouter initialEntries={['/characters']}>
      <Route path="/:select">
        <Home />
      </Route>
    </MemoryRouter>
  );

  const zander = await screen.findByText(/zander/i);
  expect(zander).toBeInTheDocument();

  const torpedo = await screen.findByText(/torpedo/i);
  expect(torpedo).toBeInTheDocument();

  const turd = await screen.findByText(/turd/i);
  expect(turd).toBeInTheDocument();
});

test('checks for three random episodes', async () => {
  render(
    <MemoryRouter initialEntries={['/characters']}>
      <Home />
    </MemoryRouter>
  );
});

test('', async () => {
  render(
    <MemoryRouter initialEntries={['/characters']}>
      <Home />
    </MemoryRouter>
  );
});

test('', async () => {
  render(
    <MemoryRouter initialEntries={['/characters']}>
      <Home />
    </MemoryRouter>
  );
});
