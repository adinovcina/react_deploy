import * as types from "../actionTypes";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;
    case types.NEW_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postReducer;
