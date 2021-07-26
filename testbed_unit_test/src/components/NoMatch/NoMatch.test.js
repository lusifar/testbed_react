import { render, screen } from '@testing-library/react';

import NoMatch from './NoMatch';

describe('NoMatch component', () => {
  it('test the default presenting', async () => {
    render(<NoMatch />);

    const noMatch = screen.getByText('No Match');

    expect(noMatch).toBeInTheDocument();
    expect(noMatch).toHaveClass('NoMatch');
  });
});
