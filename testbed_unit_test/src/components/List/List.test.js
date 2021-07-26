import { render, screen } from '@testing-library/react';
import List from './List';

import { renderWithRedux } from '../../tests';

describe('List component', () => {
  it('list contents 5 animals', () => {
    renderWithRedux(<List />, {
      initState: { items: ['Cat', 'Whale', 'Lion', 'Elephant', 'Rhino'] },
    });

    const listElement = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass('animals');
    expect(listItems.length).toEqual(5);
  });
});
