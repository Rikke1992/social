import React from "react";

import wrp from "./wraper.module.css";
import { Route } from "react-router-dom";
import Nav from "./Nav/Nav";

import PostContainer from "./Post/PostContainer";
import DialogsContainer from "./Dialos/Message/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersClass from "./Users/UsersClass";

const Wraper = (props) => {
  return (
    <div className={wrp.wraper}>
      <Nav />
      <wraper>
        <Route
          path="/Profile/:userId?"
          render={() => {
            return <ProfileContainer />;
          }}
        />

        <Route
          path="/Users"
          render={() => {
            return <UsersClass />;
          }}
        />

        <Route
          path="/Message"
          render={() => {
            return <DialogsContainer />;
          }}
        />

        <Route
          path="/post"
          render={() => {
            return <PostContainer />;
          }}
        />
      </wraper>
    </div>
  );
};

export default Wraper;
