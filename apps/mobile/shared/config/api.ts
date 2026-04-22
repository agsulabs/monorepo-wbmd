import {API_URL_ANDROID, API_URL_IOS} from '@env';
import {Platform} from 'react-native';

export const apiBaseUrl =
  Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS;
