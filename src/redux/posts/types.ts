export interface Post {
  body: string;
  creator: string;
  date: string;
  id: number;
  title: string;
}

export interface Posts {
  posts: Post[];
}


export const GET_POST = "GET_POST";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const GET_POST_DETAILS = "GET_POST_DETAILS";
export const COMMENT_POST = "COMMENT_POST";


interface UpdatePost {
  type: typeof CREATE_POST;
}

interface GetPost {
  type: typeof GET_POST;
}

interface DeletePost {
  type: typeof DELETE_POST;
}

export type PostActionTypes = UpdatePost | DeletePost | GetPost;
