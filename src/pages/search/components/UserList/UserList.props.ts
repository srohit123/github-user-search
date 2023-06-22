import type { UserListBackendResponse } from '../../queries/useUserListQuery';

export interface ItemProps {
  login: string;
  html_url: string;
  avatar_url: string;
  type: string;
}

export interface UserListProps {
  data: UserListBackendResponse;
  currentPage: number;
  totalPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
