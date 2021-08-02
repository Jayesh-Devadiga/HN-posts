import { BACK_TO_HOME, FETCH_POSTS, SHOW_POST_JSON } from "../actions/types";

const initialState = {
  postsList: [],
  postJson: {},
  showingPostJson: false,
  page: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        postsList: [...state.postsList, ...action.payload],
        page: state.page + 1,
      };
    case SHOW_POST_JSON:
      return {
        ...state,
        showingPostJson: true,
        postJson: action.payload,
      };

    case BACK_TO_HOME:
      return {
        ...state,
        showingPostJson: false,
        postJson: {},
      };
    default:
      return state;
  }
};
