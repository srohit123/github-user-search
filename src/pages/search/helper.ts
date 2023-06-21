import { SEARCH_BY_OPTIONS } from "./constants";

export const getSearchTypeFromURL = (searchType: string | null): string => {
  switch (searchType) {
    case SEARCH_BY_OPTIONS.user:
      return 'user';
    case SEARCH_BY_OPTIONS.organization:
      return 'org';
    default:
      return '';
  }
};
