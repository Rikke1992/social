import React from "react";

import wrp from './wraper.module.css';
import { Route } from "react-router-dom";
import Nav from "./Nav/Nav";

import DialogsItems from "./Dialos/DialogsItems";
import PostContainer from "./Post/PostContainer";
import DialogsContainer from "./Dialos/Message/DialogsContainer";



const Wraper = (props) => {


  return (

    <div className={wrp.wraper}>

      <Nav />
      <wraper>
        <Route path='/Message' render={() => {

          return (<DialogsContainer  />)
        }} />

        <Route path='/post' render={() => {

          return (<PostContainer />)
        }} />











      </wraper>




    </div>

  )

}

export default Wraper;