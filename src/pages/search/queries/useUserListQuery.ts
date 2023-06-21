import { useQuery } from '@tanstack/react-query';

import { ReactQueryOptions } from '../../../utils/react-query';

import { PAGE_LIMIT } from '../constants';
import { BASE_URL, SEARCH_ENDPOINT, USER_LIST_CACHE_KEY } from './constants';
import { getHeaders } from '../../../utils/methods';

const SEARCH_API_URL = `${BASE_URL}${SEARCH_ENDPOINT}`;

interface UserListQueryParams {
  page?: number;
  searchQuery?: string | null;
  searchBy?: string | null;
}

export interface ItemProps {
  login: string;
  html_url: string;
  avatar_url: string;
  type: string;
}

export interface UserListBackendResponse {
  total_count: number;
  incomplete_results: boolean;
  items: ItemProps[];
}

export function getUserListQuery(params: UserListQueryParams) {
  const queryKey = [USER_LIST_CACHE_KEY, params];
  const headers = getHeaders();

  const queryFn = async () => {
    const response = await fetch(`${SEARCH_API_URL}?q=${params.searchQuery}+type:${params.searchBy}&page=${params.page}&per_page=${PAGE_LIMIT}`, headers);
    if (!response.ok) {
      return Promise.reject(response);
    }
    const data = await response.json();
    return data;
  }

  return {
    queryKey,
    queryFn,
  };
}

export function useUserListQuery(
  params: UserListQueryParams,
  options: ReactQueryOptions<UserListBackendResponse> = {},
) {
  const { queryKey, queryFn } = getUserListQuery(params);

  const query = useQuery({
    queryKey,
    queryFn,
    enabled: !!params.searchQuery,
    ...options,
  });

  return query;
}
