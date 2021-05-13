import React from "react";
import { connect } from "react-redux";
import MessageEnter from "./MessageEnter";

const OnChange = 'OnChange';
let res;
const idItem = (props)=>{return res = props.id};
console.log(res)
let MapStateToProps = (state) => {

    return {
        messageValue: state.Messages.messageValue,
        newMessage: state.Messages.newMessage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        OnChange: (value) => {
            dispatch({ type: OnChange, Value: value })
        }
    }
};
const PeopleMessageContainer = connect(MapStateToProps, mapDispatchToProps)(MessageEnter);
export default PeopleMessageContainer;