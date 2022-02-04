import { findByRole, findByText, render, screen } from '@testing-library/react';

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

  const charList = await screen.findAllByRole('img');
  expect(charList).toHaveLength(25);
});

test('checks for three random episodes', async () => {
  server.use(
    rest.get(
      'https://bobsburgers-api.herokuapp.com/episodes',
      (req, res, ctx) => {
        return res(ctx.json(epData));
      }
    )
  );

  render(
    <MemoryRouter initialEntries={['/episodes']}>
      <Route path="/:select">
        <Home />
      </Route>
    </MemoryRouter>
  );

  const yurty = await screen.findByText(/yurty rotten scoundrels/i);
  expect(yurty).toBeInTheDocument();

  const worms = await screen.findByText(/worms of in-rear-ment/i);
  expect(worms).toBeInTheDocument();

  const ufo = await screen.findByText(/ufo no you didn't/i);
  expect(ufo).toBeInTheDocument();

  const epList = await screen.findAllByRole('img');
  expect(epList).toHaveLength(25);
});

test('checks for three random stores nest door', async () => {
  server.use(
    rest.get(
      'https://bobsburgers-api.herokuapp.com/storeNextDoor',
      (req, res, ctx) => {
        return res(ctx.json(storData));
      }
    )
  );

  render(
    <MemoryRouter initialEntries={['/storeNextDoor']}>
      <Route path="/:select">
        <Home />
      </Route>
    </MemoryRouter>
  );

  const meth = await screen.findByText(/you do the meth recovery/i);
  expect(meth).toBeInTheDocument();

  const filed = await screen.findByText(
    /where the filed things are filing cabinets/i
  );
  expect(filed).toBeInTheDocument();

  const whine = await screen.findByText(/whine country marriage counseling/i);
  expect(whine).toBeInTheDocument();

  const storList = await screen.findAllByRole('img');
  expect(storList).toHaveLength(25);
});

test.only('checks for three random stores nest door', async () => {
  server.use(
    rest.get(
      'https://bobsburgers-api.herokuapp.com/pestControlTruck',
      (req, res, ctx) => {
        return res(ctx.json(pestData));
      }
    )
  );

  render(
    <MemoryRouter initialEntries={['/pestControlTruck']}>
      <Route path="/:select">
        <Home />
      </Route>
    </MemoryRouter>
  );

  const witch = await screen.findByText(/wicked witch of the pest/i);
  expect(witch).toBeInTheDocument();

  const gnat = await screen.findByText(/we're gnat gonna take it/i);
  expect(gnat).toBeInTheDocument();

  const ratsby = await screen.findByText(/the great ratsby exterminators/i);
  expect(ratsby).toBeInTheDocument();

  const storList = await screen.findAllByRole('img');
  expect(storList).toHaveLength(25);
});
