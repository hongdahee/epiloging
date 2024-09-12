import {BASE_URL} from '@env';
import axios from 'axios';

export const getStorageContents = async (storageId: string) => {
  try {
    const response: any = axios.get(`${BASE_URL}/api/storage/${storageId}`);
    // const response = await fetch();
    // const json = response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
