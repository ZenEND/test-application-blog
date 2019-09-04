import {
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_POST_DETAILS,
  COMMENT_POST,
  Posts,
  PostActionTypes
} from "./types";

const initialState: Posts = {
  posts: []
};

export function postReducer(
  state = initialState,
  action: PostActionTypes
): Posts {
  switch (action.type) {

    case CREATE_POST:
      return {
        posts: [...state.posts, action.payload]
      };

    case GET_POST:
      return action.posts

    case DELETE_POST:
      return {
        posts: state.posts.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      };

    default:
      return state
  }
}
