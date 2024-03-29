import React from "react";
import { connect } from "react-redux";
import Message from "./Message";

const OnChange = "OnChange";

let MapStateToProps = (state) => {
  return {
    messageValue: state.Messages.messageValue,
    newMessage: state.Messages.newMessage,
    peopls: state.Messages.peopls,
    isAuth: state.Auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    OnChange: (value) => {
      dispatch({ type: OnChange, Value: value });
    },
  };
};

const DialogsContainer = connect(MapStateToProps, mapDispatchToProps)(Message);

export default DialogsContainer;
