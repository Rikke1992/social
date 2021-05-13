import React from "react";
import './Message.css'
import { NavLink, Route } from "react-router-dom";



const Message = (props) => {

    let renderPost = () => {
        let To = '/Message/';
        let render = props.peopls.map((item) => {
            let id;
            id = item.id
            return (
                <div className='link'><NavLink to={To + item.id}>{item.name}</NavLink>
                   
                </div>
            )
        });
        return render
    };
    let messageValue = props.messageValue;
    let newPostElement = React.createRef();

    let onChange = () => {

        let value = newPostElement.current.value;

        props.OnChange(value)


    };

    let renderDialog = () => {



        let res = props.newMessage[0].message.map((item) => {
            return (<div id={item.id}>{item.message}</div>)
        });
        return res
    };


    return (
        <div>
            <div className='dialogs'>
                {renderPost()}
            </div>
            <div>{renderDialog()}</div>
            <div>
                <input type="text" ref={newPostElement} onChange={onChange} value={messageValue} />
                <button onClick={() => { }}>Отправить</button>
            </div>
        </div>
    )
};








export default Message;