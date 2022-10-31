export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_ARTICALES = 'SET_USER_ARTICALES';

export const setToken = token => dispatch => {
  dispatch({
    type: SET_USER_TOKEN,
    payload: token,
  });
};

export const setData = data => dispatch => {
  dispatch({
    type: SET_USER_ARTICALES,
    payload: data,
  });
};
