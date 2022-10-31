import {SET_USER_TOKEN, SET_USER_ARTICALES} from './Actions';

const initialState = {
  token: '',
  data: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {...state, token: action.payload};
    case SET_USER_ARTICALES:
      return {...state, data: action.payload};
    default:
      return state;
  }
}

export default userReducer;
