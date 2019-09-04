import React from "react"
import { connect } from "react-redux";
import { ThunkDispatch } from 'redux-thunk'

import '../styles/index.sass';

import { UpdatePost } from "../redux/posts/reducers.ts";
import { sendMessage } from "../redux/posts/actions.ts";
import { Posts } from "../redux/posts/types.ts";


import { DeletePost } from "../redux/posts/reducers.ts";
import { deleteMessage } from "../redux/posts/actions.ts";
import { getPostsRequest } from "../redux/posts/actions.ts";


interface AppProps {
  deleteMessage: typeof deleteMessage;
  sendMessage: typeof sendMessage;
  getPostsRequest: typeof getPostsRequest;
  posts: Posts;
  UpdatePost: UpdatePost;
  DeletePost: DeletePost;
}



class Index extends React.Component<AppProps, State>{
  private getPost(props) {
    console.log(this.props.posts)
  }
  constructor(prop) {
    super(prop)
    this.state = {

    }
  }
  componentDidUpdate() {
  }
  componentDidMount() {
    this.props.getPostsRequest()
  }
  private Preloader(props) {
    return Array.isArray(this.props.posts) ? (
      <div className="cards">{this.props.posts.map((item,i) =>
        (
          <div key={i} className="card">
            <div className="title">{item.title}</div>
            <div className="body">{item.body}</div>
            <div className="author">
            <img src="/src/static/menu-login.png"/>
            {item.author}
            </div>
            <div className="show-more">
              <button>Show More</button>
            </div>
          </div>
        )
      )}</div>
    ) : (
      <div>Loading...</div>
    )
  }
  public render() {
    return (
      <div>Hello i'm index page
        {this.Preloader()}
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  UpdatePost: state.system,
  posts: state.posts
});
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getPostsRequest: () => { dispatch(getPostsRequest()) },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
