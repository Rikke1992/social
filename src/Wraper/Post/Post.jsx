import React from "react";


const newPostTex = 'newPostTex';
const OnChange = 'onChange';




const Post = (props) => {
    
    const postValue = props.state.Post.postValue;

    let newPostElement = React.createRef();

    let onChange = () => {
        let value = newPostElement.current.value;
        props.dispatch({ type: OnChange, Value: value })

    };
    let Newtext = () => {
        props.dispatch({ type: newPostTex })
    };
    let renderPost = () => {
        let render = props.state.Post.postItem.map((item) => {

            return (<div className={item.id}><h2>{item.name}</h2><p>{item.text}</p></div>)
        });
        return render
    };
    return (<div>
        <div>{renderPost()}</div>
        <input type="text" ref={newPostElement} onChange={onChange} value={postValue} />
        <button onClick={Newtext}>Post</button></div>
    )
};

export default Post;