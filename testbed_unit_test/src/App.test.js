import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import { renderWithRouterRedux } from './tests';

describe('App component', () => {
  it('full app rendering/navigating', async () => {
    // show the home result
    const route = '/';
    renderWithRouterRedux(<App />, {
      initState: {
        items: ['Cat', 'Whale', 'Lion', 'Elephant', 'Rhino'],
      },
      route,
    });
    expect(screen.getByText('Hello World')).toBeInTheDocument();

    // click the list link
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/list/i), leftClick);

    // show the list result
    const listElement = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass('animals');
    expect(listItems.length).toEqual(5);
  });

  it('loading on a bad page', async () => {
    const route = '/fake';
    renderWithRouterRedux(<App />, {
      initState: {
        items: ['Cat', 'Whale', 'Lion', 'Elephant', 'Rhino'],
      },
      route,
    });

    expect(screen.getByText('No Match')).toBeInTheDocument();
  });
});
