export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER_DATA = 'SET_USER_DATA';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const setToken = (token: string) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setUserData = (userData: any) => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});
