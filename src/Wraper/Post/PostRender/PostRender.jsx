import React from "react";

const PostRender = (props)=>{
   
let render = props.state.post.map((item)=>{
   
    return (<div className={item.id}><h2>{item.name}</h2><p>{item.text}</p></div>)
});

return (<div>{render}</div>)

};

export default PostRender;