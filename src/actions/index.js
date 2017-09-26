import axios from 'axios';

export const GET_PRS = "GET_PRS";

export const getPrs = () => {
  //must change axios get method to proper request this is just for testing
  const promise = axios.get('https://lambda-admin.herokuapp.com/pull-requests');
  return {
    type: GET_PRS,
    payload: promise
  }
};
