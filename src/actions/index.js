export const FETCH_PRS = "FETCH_PRS";
export const PR_ERROR = "PR_ERROR";

// uses redux thunk and async/await to fetch pull requests and dispatch pr reducer
// if error is caught it will dispatch pr error reducer
export const fetchPrs = () => async (dispatch) => {
  try {
    const res = await
    fetch('https://lambda-admin.herokuapp.com/pull-requests')
    dispatch({ type: FETCH_PRS, payload: await res.json() });
  } catch(err) {
      dispatch({ type: PR_ERROR, hasError: true }); // could create seperate function for dispatch input as project scales
  };
};

