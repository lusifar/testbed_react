import axios from 'axios';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import Users from './Users';

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Users component', () => {
  it('loading text is shown while API request is in progress', async () => {
    axios.get.mockResolvedValue({
      data: {
        user: { name: 'Jack', email: 'jack@email.com' },
      },
    });

    render(<Users />);
    const loading = screen.getByText('Loading...');

    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  it("user's name is rendered", async () => {
    axios.get.mockResolvedValue({
      data: {
        user: { name: 'Jack', email: 'jack@email.com' },
      },
    });

    render(<Users />);
    const userName = await screen.findByText('Jack');
    expect(userName).toBeInTheDocument();
  });

  it('error message is shown', async () => {
    axios.get.mockRejectedValue({ message: 'API is down' });

    render(<Users />);

    const errorMessage = await screen.findByText('API is down');
    expect(errorMessage).toBeInTheDocument();
  });
});
