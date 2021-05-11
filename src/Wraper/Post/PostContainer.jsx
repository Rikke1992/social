import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
const newPostTex = 'newPostTex';
const OnChange = 'onChange';




// const PostContainer = (props) => {
//     let PostIn = props.state.Post;

//     const postValue = props.state.Post.postValue;

//     let onChange = (value) => {

//         props.dispatch({ type: OnChange, Value: value })

//     };

//     let Newtext = () => {

//         props.dispatch({ type: newPostTex })
//     };


//     return (<Post postValue={postValue} onChange={onChange} Newtext={Newtext} Post={PostIn} />)



//     // const postValue = props.state.Post.postValue;

//     // let newPostElement = React.createRef();

//     // let onChange = () => {
//     //     let value = newPostElement.current.value;
//     //     props.dispatch({ type: OnChange, Value: value })

//     // };
//     // let Newtext = () => {
//     //     props.dispatch({ type: newPostTex })
//     // };
//     // let renderPost = () => {
//     //     let render = props.state.Post.postItem.map((item) => {

//     //         return (<div className={item.id}><h2>{item.name}</h2><p>{item.text}</p></div>)
//     //     });
//     //     return render
//     // };
//     // return (<div>
//     //     <div>{renderPost()}</div>
//     //     <input type="text" ref={newPostElement} onChange={onChange} value={postValue} />
//     //     <button onClick={Newtext}>Post</button></div>
//     // )
// };
let MapStateToProps = (state) => {
    
    return {
        Post: state.Post,
        postValue: state.Post.postValue
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (value) => {

            dispatch({ type: OnChange, Value: value })

        },

        Newtext: () => {

            dispatch({ type: newPostTex })
        }

    }
};
const PostContainer = connect(MapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;