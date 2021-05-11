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
                    {/* <Route path={To + item.id} component={() => {
                    return <DialogsContainer />
                }} /> */}
                </div>
            )
        });
        return render
    };

   
    let messageValue = props.messageValue;
    let newPostElement = React.createRef();

    let onChange = () => {
        let value = newPostElement.current.value;
        console.log(value)
        props.OnChange(value)


    };


    // let Newtext = () => {
    //     props.dispatch({ type: 'newMessage', id:1 })
    //     console.log(props.state.Messages.newMessage)
    // };

    return (
        <div>
            <div className='dialogs'>
                {renderPost()}
            </div>
            
            <div>
                <input type="text" ref={newPostElement} onChange={onChange} value={messageValue} />
                <button onClick={() => { }}>Отправить</button></div>
        </div>
    )
};








export default Message;