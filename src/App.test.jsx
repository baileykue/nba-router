import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import App from './App';

test('header and  banner loading properly', async () => {
  //const select = 'characters';
  render(<App />);

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
