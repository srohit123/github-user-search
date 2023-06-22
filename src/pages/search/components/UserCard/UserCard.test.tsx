import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import UserCard from './UserCard';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('UserCard', () => {
  const useCardData = {
    avatar: 'avatar',
    profileURL: 'avatar',
    username: 'demo',
  };

  beforeEach(() => {
    render(
      <Wrapper>
        <UserCard
          avatar={useCardData.avatar}
          profileURL={useCardData.profileURL}
          username={useCardData.username}
        />
      </Wrapper>,
    );
  });

  it('Render UserCard Component', () => {
    expect(screen.getByTestId('user-card')).toBeInTheDocument();
  });

  it('Display username in UserCard Component', () => {
    expect(screen.getByText(useCardData.username)).toBeInTheDocument();
  });
});
