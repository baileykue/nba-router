import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import Home from './Home';

test.only('header and  banner loading properly', async () => {
  const select = 'characters';
  render(<Home />);

  const header = screen.getByRole('heading', {
    name: /welcome bob's burgers fans/i,
  });
  const banner = screen.getByRole('banner');
  const bannerText = screen.getByText(/store next door/i);
  const loading = screen.getByText(/loading/i);

  expect(loading).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(banner).toBeInTheDocument();
  expect(bannerText).toBeInTheDocument();
  await waitForElementToBeRemoved(loading);
});
