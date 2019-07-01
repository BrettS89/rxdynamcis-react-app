import { SET_LOADING, SET_SCREEN, SET_ERROR } from './actionTypes';

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

export const setIsError = () => ({
  type: SET_ERROR,
  payload: true,
});

export const setIsNotError = () => ({
  type: SET_ERROR,
  payload: false,
});
