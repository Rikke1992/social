import React from "react";

import wrp from './wraper.module.css';
import { Route } from "react-router-dom";
import Nav from "./Nav/Nav";

import DialogsItems from "./Dialos/DialogsItems";
import Post from "./Post/Post";



const Wraper = (props) => {


  return (

    <div className={wrp.wraper}>

      <Nav />
      <wraper>
        <Route path='/Message' render={() => {

          return (<DialogsItems dispatch={props.dispatch} state={props.state} Messages={props.state.Messages} peopls={props.state.Messages.peopls} />)
        }} />

        <Route path='/post' render={() => {

          return (<Post store={props.store} state={props.state} dispatch={props.dispatch} />)
        }} />











      </wraper>




    </div>

  )

}

export default Wraper;