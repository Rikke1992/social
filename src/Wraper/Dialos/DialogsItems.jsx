import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogsItems.css";
import Message from "./Message/Message";
import { Route } from "react-router-dom";

const Dialogs = (props) => {
    let To = '/Message/';
    let peoplsData = props.peopls.map((item) => {
        let id;
        id = item.id
        return (
            <div><NavLink to={To + item.id}>{item.name}</NavLink>
                <Route path={To + item.id} component={() => {
                    return <Message dispatch={props.dispatch} state={props.state} newMessage={props.Messages.newMessage} id={id} />
                }} />
            </div>
        )
    });
    return (
        <div className='dialogs'>
            {peoplsData}
        </div>
    )
};

export default Dialogs;