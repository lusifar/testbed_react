import { render, screen } from '@testing-library/react';

import User from './User';

describe('User component', () => {
  it('test the default presenting', async () => {
    const user = {
      name: 'fakeName',
      email: 'fake@fake.com',
    };

    render(<User user={user} />);

    expect(screen.getByText('fakeName')).toBeInTheDocument();
    expect(screen.getByText('fake@fake.com')).toBeInTheDocument();
  });
});
