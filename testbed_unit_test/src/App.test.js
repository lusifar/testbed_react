import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders h1 element', async () => {
    render(<App />);

    // to see the html output of the component
    screen.debug();

    // if failed, throw error
    expect(screen.getByText('Hello World')).toBeInTheDocument();

    // if failed, return null
    expect(screen.queryByText('Hello')).toBe(null);

    // if failed, return Promise.reject
    expect(await screen.findByText('Hello World')).toBeInTheDocument();
  });
});
