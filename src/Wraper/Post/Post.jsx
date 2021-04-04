import React from "react";
import {reactRendering} from './../../index.js';
import { newPost } from './../../state';
import  { subcribe } from './../../state';

const Post = (props) => {
    let newPostElement = React.createRef();

    let onChange = () => {
        let value = newPostElement.current.value;
        props.state.postValue = value
        reactRendering(props.state)
        subcribe(reactRendering)

    };

    let Newtext = () => {

        let value = newPostElement.current.value;

        newPost(value)
        props.state.postValue = ''

    };

    return (<div><input type="text" ref={newPostElement} onChange={onChange} value={props.state.postValue} />
        <button onClick={Newtext}>Post</button></div>
    )
};

export default Post;