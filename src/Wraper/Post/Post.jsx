import React from "react";
import { Redirect } from "react-router-dom";

const Post = (props) => {
  /* if (!props.isAuth) return <Redirect to={"/login"} />; */
  let newPostElement = React.createRef();

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

  let onChange = () => {
    let value = newPostElement.current.value;
    props.onChange(value);
  };
  let addPost = () => {
    props.Newtext();
  };
  return (
    <div>
      <div>{renderPost()}</div>
      <input
        type="text"
        ref={newPostElement}
        onChange={onChange}
        value={props.postValue}
      />
      <button onClick={addPost}>Post</button>
    </div>
  );
};

export default Post;
