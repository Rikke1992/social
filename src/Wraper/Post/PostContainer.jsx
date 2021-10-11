import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { newPost } from "../../Redux/PostsReducer";

let MapStateToProps = (state) => {
  return {
    Post: state.Post,
    postValue: state.Post.postValue,
    isAuth: state.Auth.isAuth,
  };
};

const PostContainer = connect(MapStateToProps, { newPost })(Post);

export default PostContainer;
