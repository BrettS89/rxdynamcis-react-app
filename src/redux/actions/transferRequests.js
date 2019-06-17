import { GET_OPEN_TRANSFER_REQUESTS, SET_OPEN_TRANSFER_REQUESTS, GET_MY_TRANSFER_REQUESTS, SET_MY_TRANSFER_REQUESTS, CLAIM_TRANSFER_REQUEST, CANCEL_TRANSFER_REQUEST, COMPLETE_TRANSFER_REQUEST } from './actionTypes'

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