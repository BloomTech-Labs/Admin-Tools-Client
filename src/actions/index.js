export const FETCH_PRS = "FETCH_PRS";
export const PR_ERROR = "PR_ERROR";
export const DELETE_PR = "DELETE_PR";
export const CLEAR_PRS = "CLEAR_PRS";

const prError = () => {
  return { 
    type: PR_ERROR,
    hasError: true
  }
};

export const fetchPrs = () => async dispatch => {
  try {
    const res = await fetch('https://lambda-admin.herokuapp.com/pull-requests')
    dispatch({ type: FETCH_PRS, payload: await res.json() });
  } catch(err) {
      dispatch(prError());
  };
};

export const deletePr = (id) => async dispatch => {
  try {
    const res = await fetch(`https://lambda-admin.herokuapp.com/pull-requests/${id}`, { method: 'delete' })
    dispatch({ type: DELETE_PR, payload: await res.json() });
  } catch(err) {
      dispatch(prError());
  };
};

export const clearClosedPrs = () => async dispatch => {
  try {
    const res = await fetch('https://lambda-admin.herokuapp.com/pull-requests/clear', { method: 'delete' })
    dispatch({ type: FETCH_PRS, payload: await res.json() });
  } catch(err) {
      dispatch(prError());
  };
};