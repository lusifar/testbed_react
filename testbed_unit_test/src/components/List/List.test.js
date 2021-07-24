import { render, screen } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  it('list contents 5 animals', () => {
    render(<List />);

    const listElement = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass('animals');
    expect(listItems.length).toEqual(5);
  });
});
