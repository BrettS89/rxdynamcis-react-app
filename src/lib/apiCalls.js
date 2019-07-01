import axios from 'axios';
import { URI } from '../config';

function getToken() {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('no token');

  return {
    headers: {
      Authorization: token,
    },
  };
}

export const apiLogin = async body => {
  return await axios.post(`${URI}/employee/login`, body);
};

export const apiGetOpenTransferRequests = async () => {
  return await axios.get(`${URI}/transferrequest/openrequests`, getToken());
};

export const apiGetMyTransferRequests = async () => {
  return await axios.get(`${URI}/transferrequest/myrequests`, getToken());
};

export const apiClaimTransferRequest = async body => {
  return await axios.post(`${URI}/transferrequest/claim`, body, getToken());
};

export const apiCancelTransferRequest = async body => {
  return await axios.post(`${URI}/transferrequest/cancel`, body, getToken());
};

export const apiCompleteTransferRequest = async body => {
  return await axios.post(`${URI}/transferrequest/complete`, body, getToken());
};

export const apiGetRxDetails = async tr => {
  return await axios.get(`${URI}/pbm/rxdetails/${tr}`, getToken());
};

export const apiGetTrReport = async body => {
  return await axios.post(`${URI}/transferrequest/history`, body, getToken());
};
