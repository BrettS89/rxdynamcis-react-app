import { SET_OPEN_TRANSFER_REQUESTS, SET_MY_TRANSFER_REQUESTS, SET_RX_DETAILS, SET_TRANSFER_REQUEST_HISTORY } from '../actions/actionTypes';

const INITIAL_STATE = {
  openTransferRequests: [],
  myTransferRequests: [],
  rxDetails: null,
  history: [],
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

    case SET_RX_DETAILS:
      return {
        ...state,
        rxDetails: payload,
      };

    case SET_TRANSFER_REQUEST_HISTORY:
      return {
        ...state,
        history: payload,
      };

    default:
      return state;
  }
}
