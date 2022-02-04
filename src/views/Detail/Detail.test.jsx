import {
  findByRole,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { MemoryRouter, Route } from 'react-router-dom';

import Detail from './Detail';
import { charData } from '../../utils/test-data';

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

test.only('checking for image, name, detail, and button to be on the page', async () => {
  render(
    <MemoryRouter initialEntries={['/characters/493']}>
      <Route path="/:select/:id">
        <Detail />
      </Route>
    </MemoryRouter>
  );

  const name = await screen.findByRole('heading', {
    name: /warren fitzgerald/i,
  });
  expect(name).toBeInTheDocument();

  const image = await screen.findByRole('img');
  expect(image).toBeInTheDocument();

  const occupation = await screen.findByText(/businessman/i);
  expect(occupation).toBeInTheDocument();

  const hair = await screen.findByText(/brown/i);
  expect(hair).toBeInTheDocument();

  const episode = await screen.findByText(/pro tiki/i);
  expect(episode).toBeInTheDocument();

  const button = await screen.findByRole('button', { name: /back/i });
  expect(button).toBeInTheDocument();
});
