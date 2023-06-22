import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import UserSearchForm from './UserSearchForm';
import { SEARCH_BY_OPTIONS } from '../../constants';

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

describe('UserSearchForm', () => {
  const onReset = jest.fn();
  const onSubmit = jest.fn();

  const testUserName = 'Mike';

  const formData = {
    searchBy: SEARCH_BY_OPTIONS.user,
    searchQuery: testUserName,
  };

  beforeEach(() => {
    render(
      <Wrapper>
        <UserSearchForm
          formData={formData}
          disable={true}
          onReset={onReset}
          onSubmit={onSubmit}
        />
      </Wrapper>,
    );
  });

  it('Render UserSearchForm Component', () => {
    expect(screen.getByTestId('user-search-form')).toBeInTheDocument();
  });

  it('Valid search by selection', () => {
    const radioButtonConst = screen.getByLabelText(SEARCH_BY_OPTIONS.user);
    expect(radioButtonConst).toBeChecked();
  });

  it('Valid search by selection', () => {
    const searchField = screen.getByPlaceholderText('Search User');
    expect(searchField).toHaveValue(testUserName);
  });
});
