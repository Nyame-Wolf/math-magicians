import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    // screen.debug();
  });
  test('App Snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
