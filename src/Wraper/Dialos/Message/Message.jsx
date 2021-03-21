import React from "react";
import  './Message.css'



const Message = (props) => {
    
    return (
        <div className="Message">
            <img src={props.img} alt="avatar" />
            <p>{props.message}</p>
            <strong>likes </strong>{props.likes}
        </div>
    )
};






export default Message;