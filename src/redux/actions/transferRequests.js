import { GET_OPEN_TRANSFER_REQUESTS, SET_OPEN_TRANSFER_REQUESTS, GET_MY_TRANSFER_REQUESTS, SET_MY_TRANSFER_REQUESTS, CLAIM_TRANSFER_REQUEST, CANCEL_TRANSFER_REQUEST, COMPLETE_TRANSFER_REQUEST, GET_RX_DETAILS, SET_RX_DETAILS, GET_TRANSFER_REQUEST_HISTORY, SET_TRANSFER_REQUEST_HISTORY } from './actionTypes'

export const getOpenTransferRequests = () => ({
  type: GET_OPEN_TRANSFER_REQUESTS,
});

export const setOpenTransferRequests = payload => ({
  type: SET_OPEN_TRANSFER_REQUESTS,
  payload,
});

export const getMyTransferRequests = () => ({
  type: GET_MY_TRANSFER_REQUESTS,
});

export const setMyTransferRequests = payload => ({
  type: SET_MY_TRANSFER_REQUESTS,
  payload,
});

export const claimTransferRequest = payload => ({
  type: CLAIM_TRANSFER_REQUEST,
  payload,
});

export const cancelTransferRequest = payload => ({
  type: CANCEL_TRANSFER_REQUEST,
  payload,
});

export const completeTransferRequest = payload => ({
  type: COMPLETE_TRANSFER_REQUEST,
  payload,
});

export const getRxDetails = payload => ({
  type: GET_RX_DETAILS,
  payload,
});

export const setRxDetails = payload => ({
  type: SET_RX_DETAILS,
  payload,
});

export const getTransferRequestHistory = payload => ({
  type: GET_TRANSFER_REQUEST_HISTORY,
  payload,
});

export const setTransferRequestHistory = payload => ({
  type: SET_TRANSFER_REQUEST_HISTORY,
  payload,
});
