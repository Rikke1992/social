import React from "react";
import {reactRendering} from './../../index.js';


const Post = (props) => {
    let newPostElement = React.createRef();
    
    let onChange = () => {
        let value = newPostElement.current.value;
        props.state.postValue = value
        reactRendering(props.state)
        props.subcribe(reactRendering)

    };

    let Newtext = () => {
        
        

        // newPost(value)
        props.dispatch('newPostTex')
        props.state.postValue = ''
        
    };

    return (<div><input type="text" ref={newPostElement} onChange={onChange} value={props.state.postValue} />
        <button onClick={Newtext}>Post</button></div>
    )
};

export default Post;