export const GET_PRS = "GET_PRS";

export const fetchPrs = () => (dispatch) => {
  fetch('https://lambda-admin.herokuapp.com/pull-requests')
    .then(res => res.json())
    .then(res => dispatch({
      type: GET_PRS,
      payload: res
    }))
    .catch(err => console.log(err));
};

//TODO
//add better error handling
//change fetch request to proper request
