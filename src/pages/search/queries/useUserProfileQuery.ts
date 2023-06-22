import { useQuery } from '@tanstack/react-query';

import type { ReactQueryOptions } from '../../../utils/react-query';
import { ERRORS } from '../../../utils/messages';
import { getHeaders } from '../../../utils/methods';

import {
  BASE_URL,
  PROFILE_ENDPOINT,
  USER_PROFILE_CACHE_KEY,
} from './constants';
import { useSnackBar } from '../../../contexts/useSnackbar';

const USER_PROFILE_API = `${BASE_URL}${PROFILE_ENDPOINT}`;

interface UserProfileQueryParams {
  username?: string;
}

export interface UserProfileResponse {
  login: string;
  following: number;
  followers: number;
  public_repos: number;
  bio: string;
  name: string;
  location: string;
}

export function getUserProfileQuery(params: UserProfileQueryParams = {}) {
  const queryKey = [USER_PROFILE_CACHE_KEY, params];
  const headers = getHeaders();

  const queryFn = async () => {
    const response = await fetch(
      `${USER_PROFILE_API}/${params.username}`,
      headers,
    );
    if (!response.ok) {
      return Promise.reject(response);
    }
    const data = await response.json();
    return data;
  };

  return {
    queryKey,
    queryFn,
  };
}

export function useUserProfileQuery(
  params: UserProfileQueryParams = {},
  options: ReactQueryOptions<UserProfileResponse> = {},
) {
  const { queryKey, queryFn } = getUserProfileQuery(params);
  const { showErrorMessage } = useSnackBar();

  const query = useQuery({
    queryKey,
    queryFn,
    onError: () => {
      showErrorMessage(ERRORS.SERVER);
    },
    enabled: false,
    ...options,
    staleTime: 4 * 60 * 1000,
    cacheTime: 4 * 60 * 1000,
  });

  return query;
}
