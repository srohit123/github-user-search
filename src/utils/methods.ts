import * as Yup from 'yup';

import { API_RATE_LIMITING_AUTH_TOKEN } from './config';
import { ERRORS } from './messages';

export const getSearchFormSchema = () => {
  return Yup.object().shape({
    searchBy: Yup.string().trim().required(ERRORS.FIELD_REQUIRED),
    searchQuery: Yup.string().trim().required(ERRORS.FIELD_REQUIRED),
  })
}

export const formatNumber = (number: number) => {
  if (number >= 1000) {
    const suffixes = ['', 'k', 'M', 'B', 'T'];
    const suffixIndex = Math.floor(Math.log10(number) / 3);
    const abbreviatedNumber = (number / Math.pow(1000, suffixIndex)).toFixed(1);
    return abbreviatedNumber + suffixes[suffixIndex];
  }
  return number.toString();
}

export const getHeaders = () => {
  let auth: {[key: string]: string} = {};

  if (API_RATE_LIMITING_AUTH_TOKEN) {
    auth['Authorization'] = `token ${API_RATE_LIMITING_AUTH_TOKEN}`;
  }
  
  return {
    headers: {
      ...auth,
      'Content-Type': 'application/json',
    }
  }  
}
