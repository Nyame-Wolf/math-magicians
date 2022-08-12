import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('App', () => {
  test('renders App component', () => {
    const tree = render(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
