import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import App from './App.js';

afterEach(cleanup);

test('App component renders a global wrapper', () => {
  const { getByTestId } = render(<MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>);

  expect(getByTestId('global').className).toEqual('global-wrapper');
});

test('App component renders a navbar', () => {
  const { getByTestId } = render(<MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>);

  expect(getByTestId('navbar').className).toEqual('navbar-wrapper');
});

test('App component renders a the hero text STAR', () => {
  const { getByText } = render(<MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>);

  expect(getByText('STAR').className).toEqual('app-hero-text');
});

test('App component renders a the hero text STAR', () => {
  const { getByText } = render(<MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>);

  expect(getByText('WARS').className).toEqual('app-hero-text');
});

test('App component renders a button with the text "Explore the Galaxy"', () => {
  const { getByText } = render(<MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>);

  expect(getByText('Explore the Galaxy').className).toEqual('app-button');
});