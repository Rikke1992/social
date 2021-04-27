import React from "react";
import './Message.css'


const Message = (props) => {




    let messageValue = props.state.Messages.messageValue;
    let newPostElement = React.createRef();

    let onChange = (e) => {
        let value = e.target.value;
        console.log(value)
        props.dispatch({ type: "OnChange", Value: value })

        
    };

    let Newtext = () => {
        props.dispatch({ type: 'newMessage', id:1 })
        console.log(props.state.Messages.newMessage)
    };
    // let it = props.newMessage.filter((item) => {
    //     return props.id == item.id
    // });

    // let RenderMessage = props.Messages.
    return (
        <div>
            {/* <div className="Message">
                <img src={it[0].img} alt="avatar" />
                <p>{it[0].message}</p>
                <strong>likes </strong>{it[0].likes}
            </div> */}
            <div>
                <input type="text" ref={newPostElement} onChange={onChange} value={messageValue} />
                <button onClick={Newtext}>Отправить</button></div>
        </div>
    )
};






export default Message;