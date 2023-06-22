import type { QueryKey } from '@tanstack/query-core';
import type { UseQueryOptions } from '@tanstack/react-query/src/types';

export type ReactQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = any,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryKey' | 'queryFn'
>;
