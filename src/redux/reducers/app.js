import { SET_LOADING, SET_SCREEN, SET_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  screen: null,
  isError: false,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case SET_SCREEN:
      return {
        ...state,
        screen: payload,
      };

    case SET_ERROR:
      return {
        ...state,
        isError: payload,
      };

    default:
      return state;
  }
}
