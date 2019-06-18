import { SET_LOADING, SET_SCREEN } from './actionTypes';

export const setScreen = payload => ({
  type: SET_SCREEN,
  payload,
});

export const isLoading = () => ({
  type: SET_LOADING,
  payload: true,
});

export const isNotLoading = () => ({
  type: SET_LOADING,
  payload: false,
});
