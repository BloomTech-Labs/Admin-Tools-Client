import { combineReducers } from 'redux';

import { GET_PRS } from '../actions';

const prReducer = (prs = [], action) => {
  switch(action.type) {
    case GET_PRS:
      return action.payload.data;
    default:
      return prs;
  }
};

export default combineReducers({ prs: prReducer });