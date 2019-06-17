import { ON_LOGIN, ON_LOGOUT } from './actionTypes';

export const login = payload => ({
  type: ON_LOGIN,
  payload,
});

export const onLogout = payload => ({
  type: ON_LOGOUT,
  payload,
});

export const resetStore = () => ({
  type: 'RESET',
});
