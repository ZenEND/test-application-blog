import {
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_POST_DETAILS,
  COMMENT_POST,
} from "./types";
import axios from "axios"


//GET
export function SetPost(data) {
  return {
      type : GET_POST,
      posts : data
    }
  }

export const getPostsRequest = () => {
  return (dispatch) => {
    return axios.get('https://simple-blog-api.crew.red/posts')
      .then(response => {
        dispatch(SetPost(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

//POST_DETAILS
export function ShowPostDetails() {
  return {
    type: GET_POST_DETAILS,
    payload: newMessage
  };
}

export const postDetailsRequest = () => {
  return (dispatch) => {
    return axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
      .then(response => {
        dispatch(ShowPostDetails(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

//POST
export function CreateNewPost(newMessage: Message) {
  return {
    type: CREATE_POST,
    payload: newMessage
  };
}

export const CreatePostRequest = (title, body) => {
  return (dispatch) => {
    return axios.post('https://simple-blog-api.crew.red/posts',{title: title, body: body})
      .then(response => {
        dispatch(SetPost(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};


//UPDATE_POST
export function UpdatePost() {
  return {
    type: UPDATE_POST,
  };
}
export const updatePostRequest = (id, title, body) => {
  return (dispatch) => {
    return axios.put(`https://simple-blog-api.crew.red/posts/${id}`, {title: title, body: body})
      .then(response => {
        dispatch(SetPost(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

//DELETE
export function deletePost() {
  return {
    type: DELETE_POST,
  };
}
export const deletePostRequest = (id) => {
  return (dispatch) => {
    return axios.delete(`https://simple-blog-api.crew.red/posts/${id}`)
      .then(response => {
        dispatch(deletePost(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};


//POST_COMMENT
export function PostComment() {
  return {
    type: COMMENT_POST,
  };
}
export const postCommentRequest = (postId,body) => {
  return (dispatch) => {
    return axios.post("https://simple-blog-api.crew.red/comments", {postid: postId, body: body})
      .then(response => {
        dispatch(SetPost(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};
