import { SET_OPEN_TRANSFER_REQUESTS, SET_MY_TRANSFER_REQUESTS } from '../actions/actionTypes';

const INITIAL_STATE = {
  openTransferRequests: [],
  myTransferRequests: [],
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {

    case SET_OPEN_TRANSFER_REQUESTS:
      return {
        ...state,
        openTransferRequests: payload,
      };

    case SET_MY_TRANSFER_REQUESTS:
      return {
        ...state,
        myTransferRequests: payload,
      };

    default:
      return state;
  }
}
