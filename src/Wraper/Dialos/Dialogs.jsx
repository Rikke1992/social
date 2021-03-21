import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";


const Dialogs = (props) => {
    let To = '/Message/';
    let peoplsData = props.peopls.map((item) => {
        
        return (
            <NavLink to={To + item.id}>{item.name}</NavLink>
        )
    });
    return (
        <div className='dialogs'>
            {peoplsData}
        </div>
    )
};

export default Dialogs;