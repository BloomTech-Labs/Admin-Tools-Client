import { combineReducers } from 'redux';

import { FETCH_PRS, PR_ERROR, DELETE_PR, CLEAR_PRS } from '../actions';


const prReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_PRS:
      return action.payload;
    case DELETE_PR:
      return action.payload;
    case CLEAR_PRS:
      return action.payload;
    default:
      return state;
  }
};



const prErrorReducer = (state = false, action) => {
  switch(action.type) {
    case PR_ERROR:
      return action.hasError;
    default:
      return state;
  }
};


export default combineReducers({ prs: prReducer, prError: prErrorReducer });
