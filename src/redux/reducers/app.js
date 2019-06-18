import { SET_LOADING, SET_SCREEN } from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  screen: null,
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
      }

    default:
      return state;
  }
}
