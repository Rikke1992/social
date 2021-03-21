import React from "react";

import wrp from './wraper.module.css';
import {  Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Message from "./Dialos/Message/Message";
import Dialogs from "./Dialos/Dialogs";




const Wraper = (props) => {
 
 
  return (
    
      <div className={wrp.wraper}>

        <Nav />
        <wraper>
          <Route path='/Message' render={() => { 
             
            return (<Dialogs peopls={props.state.peopls} />) }} />
          
          <Route path='/Message/1' component={() => {
            return (
              <Message img={props.newMessage[0].img}
                message={props.newMessage[0].message}
                likes={props.newMessage[0].likes} />
            )
          }} />



          {/* <Route path='/Message' component={()=>{
            return (
              <Message img='https://www.kino-teatr.ru/acter/photo/7/5/58857/962994.jpg'
              message='I`am Muccaley Calcine!'
              likes='100' />
            )
          }}/> */}

        </wraper>




      </div>
    
  )
  
}

export default Wraper;