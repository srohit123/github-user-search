import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Box } from '@mui/system';
import { CircularProgress, Typography } from '@mui/material';

import UserSearchForm from './components/UserSearchForm/UserSearchForm';
import UserList from './components/UserList/UserList';

import { DEFAULT_FORM_VALUE, PAGE_LIMIT } from './constants';
import type { SearchFormType } from './interfaces';

import { useUserListQuery } from './queries/useUserListQuery';

import { getSearchTypeFromURL } from './helper';
import { ERRORS } from '../../utils/messages';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams(DEFAULT_FORM_VALUE);

  const currentSearchBy = searchParams.get('search_by');
  const currentSearchQuery = searchParams.get('search_query');
  const currentPage = searchParams.get('page');

  const { data, isFetched, isFetching } = useUserListQuery({
    page: Number(currentPage),
    searchBy: getSearchTypeFromURL(currentSearchBy),
    searchQuery: currentSearchQuery,
  });

  const showUserList = data && data.total_count;

  const formattedFormData: SearchFormType = useMemo(() => {
    return {
      searchBy: currentSearchBy,
      searchQuery: currentSearchQuery,
    } as SearchFormType;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setSearchParams({
      search_by: currentSearchBy || '',
      search_query: currentSearchQuery || '',
      page: String(page),
    });
  };

  const handleSubmit = (values: SearchFormType) => {
    const { searchBy, searchQuery } = values;
    setSearchParams({
      search_by: searchBy,
      search_query: searchQuery,
      page: currentPage || DEFAULT_FORM_VALUE.page,
    });
  };

  const handleReset = () => {
    setSearchParams({});
  };

  return (
    <>
      <Box justifyContent={'center'} display={'flex'} mt={15} mb={10}>
        <UserSearchForm
          formData={formattedFormData}
          disable={isFetching}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />
      </Box>

      {isFetching && (
        <Box justifyContent="center" display="flex">
          <CircularProgress size={50} />
        </Box>
      )}

      {!!showUserList && (
        <UserList
          data={data}
          currentPage={Number(currentPage || '1')}
          totalPage={Math.ceil(data.total_count / PAGE_LIMIT)}
          onPageChange={handlePageChange}
        />
      )}

      {!showUserList && isFetched && (
        <Box display="flex" justifyContent="center">
          <Typography variant="h1">{ERRORS.NO_RESULT_FOUND}</Typography>
        </Box>
      )}
    </>
  );
};

export default Search;
