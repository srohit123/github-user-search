import type { SearchFormType } from '../../interfaces';

export interface UserSearchFormProps {
  formData: SearchFormType;
  onReset: () => void;
  disable: boolean;
  onSubmit: (value: SearchFormType) => void;
}
