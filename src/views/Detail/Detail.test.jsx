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

test('', async () => {
  render(
    <MemoryRouter>
      <Detail />
    </MemoryRouter>
  );
});
