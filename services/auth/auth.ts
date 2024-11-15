import { baseURL, service } from '../service';

export const loginUserService = async (data: any) => {
  return await service('/auth/sign-in', 'post', data);
};

export const registerUserService = async (data: any) => {
  return await service('/auth/sign-up', 'post', data);
};

export const checkUserService = async (Cookie : any) => {
  return await fetch(`${baseURL}/auth/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: (await Cookie.get('userToken')) || '',
    },
  });
};

export const getUserDataService = async () => {
  return await service('/auth/user', 'get');
};
