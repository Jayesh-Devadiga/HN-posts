import API from "../../utils/API";
import { BACK_TO_HOME, FETCH_POSTS, SHOW_POST_JSON } from "./types";

export const fetchPosts = (page) => async (dispatch) => {
  const posts = await API.get(`search_by_date?tags=story&page=${page}`);
  console.log(posts.data.hits);
  dispatch({ type: FETCH_POSTS, payload: posts.data.hits });
};

export const showPostJson = (post) => {
  return {
    type: SHOW_POST_JSON,
    payload: post,
  };
};

export const backToHome = () => {
  return {
    type: BACK_TO_HOME,
  };
};
