import React from "react";

import wrp from './wraper.module.css';
import { Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Message from "./Dialos/Message/Message";
import Dialogs from "./Dialos/Dialogs";
import Post from "./Post/Post";
import PostRender from './Post/PostRender/PostRender';


const Wraper = (props) => {


  return (

    <div className={wrp.wraper}>

      <Nav />
      <wraper>
        <Route path='/Message' render={() => {

          return (<Dialogs peopls={props.state.peopls} />)
        }} />

        <Route path='/post' render={() => {

          return (<Post newPost={props.newPost} state={props.state} />)
        }} />

        <Route path='/Message/1' component={() => {
          return (
            <Message img={props.state.newMessage[0].img}
              message={props.state.newMessage[0].message}
              likes={props.state.newMessage[0].likes} />
          )
        }} />
        <Route path='/Post' render={() => {
          return (<PostRender state={props.state} />)
        }}/>






      </wraper>




    </div>

  )

}

export default Wraper;