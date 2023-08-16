import axios from 'axios';
import {BASE_URL} from '@env';

export const getStorageContents = async (storageId: string) => {
  const response = await axios.get(`${BASE_URL}/api/storage/${storageId}`);
  return response.data;
};
