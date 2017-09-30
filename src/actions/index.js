export const FETCH_PRS = 'FETCH_PRS';
export const PR_ERROR = 'PR_ERROR';

// this action fires of a reducer that changes the prError state to true
const prError = () => {
  return {
    type: PR_ERROR,
    hasError: true
  };
};
// uses redux thunk and async/await to fetch pull requests and dispatch pr reducer
// if error is caught it will dispatch pr error reducer
export const fetchPrs = () => async dispatch => {
  try {
    const res = await fetch('https://lambda-admin.herokuapp.com/pull-requests');
    dispatch({ type: FETCH_PRS, payload: await res.json() });
  } catch (err) {
    dispatch(prError()); // by seperating this out we can reuse the prError function to change the error state in future action creators
  }
};
