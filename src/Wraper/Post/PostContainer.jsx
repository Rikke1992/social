import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { newPost } from "../../Redux/PostsReducer";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { withRouter } from "react-router";

let MapStateToProps = (state) => {
  return {
    Post: state.Post,
    postValue: state.Post.postValue,
    isAuth: state.Auth.isAuth,
  };
};

const PostContainer = compose(
  WithAuthRedirect,
  withRouter,
  connect(MapStateToProps, { newPost })
)(Post);

export default PostContainer;
