import {Platform} from 'react-native';

export const EMAIL_REGX = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
export const PASSWORD_REGX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[^a-z0-9])(?!.*\s).{8,20}$/;

export const isIOS = Platform.OS === 'ios';

export const BASE_URL = 'https://randomuser.me/';
