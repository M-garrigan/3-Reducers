import React from 'react';
import { createStore } from 'redux';
import reducer from '../redux/reducer.js';
import { Provider as MockProvider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from './App.js';

let store = null;
let getByTestId = null;
let getByText = null;

beforeEach( () => {
  store = createStore(reducer);

  let container = render(
    <MockProvider store={store}>
      <App />
    </MockProvider>
    );

  getByTestId = container.getByTestId;
  getByText = container.getByText;
});

afterEach( () => {
  store = null;
  getByTestId = null;
  getByText = null;
});


test('App component renders', () => {
  expect(getByTestId('appWrapper').className).toEqual('app-wrapper');
});

test('App component renders with one child', () => {
  expect(getByTestId('appWrapper').children.length).toEqual(1);
});

test('A component renders', () => {
  expect(getByTestId('aWrapper').className).toEqual('A-wrapper basic-wrapper');
});

test('A component renders with 4 children', () => {
  expect(getByTestId('aWrapper').children.length).toEqual(4);
});

test('B component renders', () => {
  expect(getByTestId('bWrapper').className).toEqual('B-wrapper basic-wrapper');
});

test('B component renders with 4 children', () => {
  expect(getByTestId('bWrapper').children.length).toEqual(4);
});

test('Logger component renders', () => {
  expect(getByTestId('loggerWrapper').className).toEqual('logger-wrapper');
});

test('Logger component renders with 2 children', () => {
  expect(getByTestId('loggerWrapper').children.length).toEqual(2);
});
  
test('Global Decrement Button updates A & B components correctly after click', async () => {
  
  fireEvent.click(getByText('global -'));

  const elementA = await getByTestId('global-count-a');
  const elementB = await getByTestId('global-count-b');
    
  expect(elementA.innerHTML).toEqual('Global Count: -1');
  expect(elementB.innerHTML).toEqual('Global Count: -1');
});

test('Global Increment Button updates A & B components correctly after click', async () => {

  fireEvent.click(getByText('global +'));

  const elementA = await getByTestId('global-count-a');
  const elementB = await getByTestId('global-count-b');
    
  expect(elementA.innerHTML).toEqual('Global Count: 1');
  expect(elementB.innerHTML).toEqual('Global Count: 1');
});

test('Local A Decrement Button updates A component correctly after click', async () => {

  fireEvent.click(getByTestId('dec-count-a'));

  const element = await getByTestId('display-count-a');
    
  expect(element.innerHTML).toEqual('-A- Count: -1');
});

test('Local A Increment Button updates A component correctly after click', async () => {

  fireEvent.click(getByTestId('inc-count-a'));

  const element = await getByTestId('display-count-a');
    
  expect(element.innerHTML).toEqual('-A- Count: 1');
});

test('Local B Decrement Button updates B component correctly after click', async () => {

  fireEvent.click(getByTestId('dec-count-b'));

  const element = await getByTestId('display-count-b');
    
  expect(element.innerHTML).toEqual('-B- Count: -1');
});

test('Local B Increment Button updates B component correctly after click', async () => {

  fireEvent.click(getByTestId('inc-count-b'));

  const element = await getByTestId('display-count-b');
    
  expect(element.innerHTML).toEqual('-B- Count: 1');
});

test('Logger correctly updates to show last action', async () => {

  fireEvent.click(getByText('global -'));

  const element = await getByTestId('logger');
    
  expect(element.firstChild.innerHTML).toEqual('DEC_ALL');
});

test('Logger correctly updates to show last action', async () => {

  fireEvent.click(getByText('global +'));

  const element = await getByTestId('logger');
    
  expect(element.firstChild.innerHTML).toEqual('INC_ALL');
});

test('Logger correctly updates to show last action', async () => {

  fireEvent.click(getByTestId('dec-count-a'));

  const element = await getByTestId('logger');
    
  expect(element.firstChild.innerHTML).toEqual('DEC_A');
});

test('Logger correctly updates to show last action', async () => {

  fireEvent.click(getByTestId('inc-count-a'));

  const element = await getByTestId('logger');
    
  expect(element.firstChild.innerHTML).toEqual('INC_A');
});

test('Logger correctly updates to show last action', async () => {

  fireEvent.click(getByTestId('dec-count-b'));

  const element = await getByTestId('logger');
    
  expect(element.firstChild.innerHTML).toEqual('DEC_B');
});

test('Logger correctly updates to show last action', async () => {

  fireEvent.click(getByTestId('inc-count-b'));

  const element = await getByTestId('logger');
    
  expect(element.firstChild.innerHTML).toEqual('INC_B'); 
});
