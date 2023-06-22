import type { SEARCH_BY_OPTIONS } from './constants';

export interface SearchFormType {
  searchQuery: string;
  searchBy: SEARCH_BY_OPTIONS;
}
