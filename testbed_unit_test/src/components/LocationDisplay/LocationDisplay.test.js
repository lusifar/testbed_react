import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import LocationDisplay from './LocationDisplay';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test Page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('LocationDisplay component', () => {
  it('test the default presenting', async () => {
    const route = '/fake-route';
    renderWithRouter(<LocationDisplay />, { route });

    expect(screen.getByTestId('location-display')).toHaveTextContent(route);
  });
});
