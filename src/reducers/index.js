import { combineReducers } from 'redux';

import { FETCH_PRS, PR_ERROR } from '../actions';

// reducer for the pull requests
const prReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRS:
      return action.payload;
    default:
      return state;
  }
};

// this reducer will be triggered if en error is caught by the action creator
const prErrorReducer = (state = false, action) => {
  switch (action.type) {
    case PR_ERROR:
      return action.hasError;
    default:
      return state;
  }
};

//in future could add loading state but at this point seems unnecessary

export default combineReducers({ prs: prReducer, prError: prErrorReducer });
