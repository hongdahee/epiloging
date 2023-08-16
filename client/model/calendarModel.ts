import axios from 'axios';
import {BASE_URL} from '@env';

// export const createAccount = async (formData: ISignUpForm) => {
//   const response = await axios.post<ISignUpRes>(
//     `${BASE_PATH}/api/users/signup`,
//     formData
//   );
//   return response.data;
// };

// export const requestLogin = async (formData: ILoginForm) => {
//   const response = await axios.post<ILoginRes>(
//     `${BASE_PATH}/api/users/login`,
//     formData
//   );
//   return response.data;
// };

// export const DeleteUser = async (id: string, token: string) => {
//   const response = await axios.delete(`${BASE_PATH}/api/users/${id}`, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

export const getCalendarEvents = async (storageId: string) => {
  const response = await axios.get(`${BASE_URL}/api/calendar/${storageId}`);
  return response.data[0].events;
};
