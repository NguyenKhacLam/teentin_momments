export const initialState = {
  token: null,
  user: null,
  posts: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_POSTS: "SET_POSTS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.token };
    case actionTypes.SET_POSTS:
      return { ...state, posts: action.token };
    default:
      return state;
  }
};

export default reducer;
