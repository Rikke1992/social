import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={"post"} component={"input"} name={"postInput"} />
      <button>Accept</button>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: "post" })(PostForm);

const Post = (props) => {
  /* if (!props.isAuth) return <Redirect to={"/login"} />; */

  const onSubmit = (formData) => {
    props.newPost(formData.postInput);
  };
  let renderPost = () => {
    let render = props.Post.postItem.map((item) => {
      return (
        <div className={item.id}>
          <h2>{item.name}</h2>
          <p>{item.text}</p>
        </div>
      );
    });
    return render;
  };

  return (
    <div>
      <div>{renderPost()}</div>
      <PostReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Post;
