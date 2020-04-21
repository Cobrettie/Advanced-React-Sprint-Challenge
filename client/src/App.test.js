import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import NavMenu from './Components/NavMenu/NavMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('"toggled" class added/removed onClick in NavMenu component', () => {
  const { getByTestId } = render(<NavMenu />)
  fireEvent.click(getByTestId('darkModeToggler'))
  expect(getByTestId('darkModeToggler').classList[0]).toBe('toggled')
  fireEvent.click(getByTestId('darkModeToggler'))
  expect(getByTestId('darkModeToggler').classList[0]).toBe('darkModeToggler')
})