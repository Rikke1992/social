import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
const newPostTex = "newPostTex";
const OnChange = "onChange";

let MapStateToProps = (state) => {
  return {
    Post: state.Post,
    postValue: state.Post.postValue,
    isAuth: state.Auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch({ type: OnChange, Value: value });
    },

    Newtext: () => {
      dispatch({ type: newPostTex });
    },
  };
};
const PostContainer = connect(MapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;
