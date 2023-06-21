export const PAGE_LIMIT = 20;

export enum SEARCH_BY_OPTIONS {
  user = "user",
  organization = "organization",
}

export const DEFAULT_FORM_VALUE = {
  search_query: '',
  search_by: SEARCH_BY_OPTIONS.user,
  page: '1',
}
